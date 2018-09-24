import { Component } from '@angular/core';
import { Tool } from '../models/tool.model';
import { ToolService } from '../tool.service'

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css'],
  providers: [ToolService]
})
export class ToolListComponent {
  tools: Tool[] = null;

  constructor(private toolService: ToolService) {
    this.tools = toolService.getTools();
  }
}
