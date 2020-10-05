import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Child, Data, RedditData } from '../services/model';
import { RedditApiService } from '../services/reddit-api.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ConnectedPositionStrategy } from '@angular/cdk/overlay';

interface CommentNode {
  author: string;
  comment: string;
  replies?: CommentNode[]
}

@Component({
  selector: 'app-entrydetails',
  templateUrl: './entrydetails.component.html',
  styleUrls: ['./entrydetails.component.scss']
})
export class EntrydetailsComponent implements OnInit {

  details: Data;

  treeData: CommentNode[] = []

  treeControl = new NestedTreeControl<CommentNode>(node => node.replies);
  dataSource = new MatTreeNestedDataSource<CommentNode>();

  constructor(private router: Router, private redditService: RedditApiService) {
    this.details = this.router.getCurrentNavigation().extras.state as Data;
  }

  hasChild = (_: number, node: CommentNode) => !!node.replies && node.replies.length > 0;

  ngOnInit(): void {
    this.getCommentsAndPopulateTree(this.details)
  }

  getCommentsAndPopulateTree(details: Data) {
    this.redditService.getCommentsById(details.permalink)
      .subscribe((redditDataAry: RedditData[]) => {
        for (let child of redditDataAry[1].data.children) {
          if (child.data.replies) {
            let commentNode: CommentNode = {
              author: child.data.author,
              comment: child.data.body,
              replies: []
            }
            this.treeData.push(this.structureComments(child, commentNode));
          } else {
            this.treeData.push({
              author: child.data.author,
              comment: child.data.body
            })
          }
        }
        this.dataSource.data = this.treeData;
      })

  }

  structureComments(child: Child, commentNode: CommentNode): CommentNode {
    for (let [index, reply] of child.data.replies.data.children.entries()) {
      if (reply.data.replies) {
        commentNode.replies.push({
          author: reply.data.author,
          comment: reply.data.body,
          replies: []
        })
        this.structureComments(reply, commentNode.replies[index])
      } else {
        commentNode.replies.push({
          author: reply.data.author,
          comment: reply.data.body,
        })
      }
    }
    return commentNode;
  }



}
