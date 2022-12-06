import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
public display=false;
public colors=["blue","red","pink"];
@Input() public parentdata="";
onclick()
{
this.display=!this.display;
}

}
