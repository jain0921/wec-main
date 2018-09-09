import { Component } from '@angular/core';
import { ViewFactoryService } from '../service/view-factory-service';

export abstract class ContentView {

  private _title: string;
  private _icon: string;

  constructor(private viewFactory: ViewFactoryService) {
  }

  public get title(): string {
    return this._title;
  }

  public get icon(): string {
    return this._icon;
  }

  public abstract perform(funcName: string, ...args: any[]): void;

  public newInstance(viewName: string): Component {
    return null;
  }
}
