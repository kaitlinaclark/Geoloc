import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, AfterViewInit {
/*  @ViewChild('room') room_id;
  @ViewChild('open') openBTN;
  @ViewChild('join') joinBTN;
  @ViewChild('videos_container') video;
  @ViewChild('room_urls') room_urls;
  connection ;
  roomid : string = '';*/
  
  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit(){

  }

// ......................................................
// .......................UI Code........................
// ......................................................
 /* disableInputButtons() {
    this.openBTN.nativeElement.disabled = true;
    this.joinBTN.nativeElement.disabled = true;
    this.room_id.nativeElement.disabled = true;
  }
  open_room() : void {
    this.disableInputButtons();
    this.roomid = this.room_id.nativeElement.value;
    this.connection.open(this.roomid);
    console.log("room_id: "+this.room_id.nativeElement.value);
  }

  //join room with specified room-id
  join_room(): void {
    this.disableInputButtons();
    this.roomid = this.room_id.nativeElement.value;
    this.connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: true,
      OfferToReceiveVideo: true
    };
    this.connection.join(this.roomid);
  }

// ......................................................
// ..................RTCMultiConnection Code.............
// ......................................................
connectVideo(): void {
// by default, socket.io server is assumed to be deployed on your own URL
this.connection.socketURL = '/';
// comment-out below line if you do not have your own socket.io server
// connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';
this.connection.socketMessageEvent = 'video-broadcast-demo';
this.connection.session = {
    audio: true,
    video: true,
    oneway: true
};
this.connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: false,
    OfferToReceiveVideo: false
};
  
this.connection.videosContainer = this.video.nativeElement;
this.connection.onstream = function(event) {
    var existing = document.getElementById(event.streamid);
    if(existing && existing.parentNode) {
      existing.parentNode.removeChild(existing);
    }
    event.mediaElement.removeAttribute('src');
    event.mediaElement.removeAttribute('srcObject');
    event.mediaElement.muted = true;
    event.mediaElement.volume = 0;
    var video = document.createElement('video');
    try {
        video.setAttributeNode(document.createAttribute('autoplay'));
        video.setAttributeNode(document.createAttribute('playsinline'));
    } catch (e) {
        video.setAttribute('autoplay', 'true');
        video.setAttribute('playsinline', 'true');
    }
    if(event.type === 'local') {
      video.volume = 0;
      try {
          video.setAttributeNode(document.createAttribute('muted'));
      } catch (e) {
          video.setAttribute('muted', 'true');
      }
    }
    video.srcObject = event.stream;
    var width = parseInt(this.connection.videosContainer.clientWidth)/3 - 20;
    /*var mediaElement = getHTMLMediaElement(video, {
        title: event.userid,
        buttons: ['full-screen'],
        width: width,
        showOnMouseEnter: false
    });
    this.connection.videosContainer.appendChild(mediaElement);
    setTimeout(function() {
        mediaElement.media.play();
    }, 5000);
    mediaElement.id = event.streamid;
};
this.connection.onstreamended = function(event) {
  var mediaElement = document.getElementById(event.streamid);
  if (mediaElement) {
      mediaElement.parentNode.removeChild(mediaElement);
      if(event.userid === this.connection.sessionid && !this.connection.isInitiator) {
        alert('Broadcast is ended. We will reload this page to clear the cache.');
        location.reload();
      }
  }
};
this.connection.onMediaError = function(e) {
  if (e.message === 'Concurrent mic process limit.') {
      /*if (DetectRTC.audioInputDevices.length <= 1) {
          alert('Please select external microphone. Check github issue number 483.');
          return;
      }
      var secondaryMic = DetectRTC.audioInputDevices[1].deviceId;
      this.connection.mediaConstraints.audio = {
          deviceId: secondaryMic
      };
      this.connection.join(this.connection.sessionid);
  }
};
}*/

}
