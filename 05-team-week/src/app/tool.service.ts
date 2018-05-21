import { Injectable } from '@angular/core';
import { Tool } from './models/tool.model';
import { TOOLS } from './tool-data';

@Injectable()
export class ToolService {

  getTools(){
    return TOOLS;
  }
}
