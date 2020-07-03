import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
//implements photo service for camera
 constructor(public photoService: PhotoService) { }
  

  ngOnInit() {
  }


}
