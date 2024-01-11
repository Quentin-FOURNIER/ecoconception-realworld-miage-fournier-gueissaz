import { Component, Input } from "@angular/core";
import { Article } from "../../core/models/article.model";
import { ArticleMetaComponent } from "./article-meta.component";
import { FavoriteButtonComponent } from "../buttons/favorite-button.component";
import { RouterLink } from "@angular/router";
import { NgForOf } from "@angular/common";
import { ButtonModule } from 'primeng/button';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@Component({
  selector: "app-article-preview",
  templateUrl: "./article-preview.component.html",
  imports: [ArticleMetaComponent, FavoriteButtonComponent, RouterLink, NgForOf],
  standalone: true,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ArticlePreviewComponent {
  @Input() article!: Article;

  toggleFavorite(favorited: boolean): void {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }
}
