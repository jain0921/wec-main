import { Inject, Injectable, ViewChild, ComponentFactoryResolver, Type, ComponentFactory } from '@angular/core';

@Inject
export class ViewFactoryService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  public newInstance(componentName: string): ComponentFactory<any> {
    return this._newInstance(null);
  }

  private _newInstance(component: Type<any>): ComponentFactory<any> {
    return this.componentFactoryResolver.resolveComponentFactory(component);
  }

}
