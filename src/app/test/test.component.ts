import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
}) 
export class TestComponent {
public name='user';
public user="";
//public myid = 'id';
public check=false;
public successClass="text-success";
public successfont="text-special";
public superclass={
"text-success": !this.check,
"text-special":true,
"text-danger": this.check}
public flag="";
public flag1="";
@Output() public childEvent= new EventEmitter();
onclick(){
 this.flag="Register success";
 }
 
 collectpoints(){
this.childEvent.emit('Your points are added');
}


public localsite= window.location.href;
	greetings()
	{	return "welcome " + this.name.toUpperCase();
	}
}
