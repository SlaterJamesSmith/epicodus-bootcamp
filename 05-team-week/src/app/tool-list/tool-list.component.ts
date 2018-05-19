import { Component } from '@angular/core';
import { ToolService } from '../tool.service'

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css'],
  providers: [ToolService]
})
export class ToolListComponent { }
