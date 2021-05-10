import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = 'Your Perfect Banking Partner'
  account = 'Account Number'
  accno = "";
  pwd = "";
  AccountDetails: any = {
    1000: { acno: 1000, password: "user1", balance: 5000, uname: 'user1' },
    1001: { acno: 1001, password: "user2", balance: 5000, uname: 'user2' },
    1002: { acno: 1002, password: "user3", balance: 4000, uname: 'user3' }
  }

  constructor() { }

  ngOnInit(): void {
  }
  changeAcc(event: any) {
    this.accno = event.target.value;
    console.log(this.accno)

  }
  changePwd(event: any) {
    this.pwd = event.target.value;
    console.log(this.pwd)
  }
  login(a:any,p:any) {

    var accno = a.value;
    var pwd =p.value;
    let data = this.AccountDetails;
    if (accno in data) {
      if (pwd == data[accno]['password']) {
        alert('login sucess');
      }

      else {
        alert('invalid password')
      }

    }
    else {
      alert('invalid account number,Please Register')
    }


  }

}
