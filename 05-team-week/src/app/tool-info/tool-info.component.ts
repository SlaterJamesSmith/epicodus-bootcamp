import { Component } from '@angular/core';
import { Tool } from '../models/tool.model';
import { ToolService } from '../tool.service';

@Component({
  selector: 'app-tool-info',
  templateUrl: './tool-info.component.html',
  styleUrls: ['./tool-info.component.css'],
  providers: [ToolService]
})
export class ToolInfoComponent {
tools: Tool[]=[];

  constructor(private toolService: ToolService) { }
}
