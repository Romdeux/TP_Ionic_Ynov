import { Component, OnInit, OnDestroy } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';


@Component({
    selector: 'app-cameraPreviewPage',
    templateUrl: 'cameraPreview.page.html',
    styleUrls: ['cameraPreview.page.scss'],
})
export class CameraPreviewPage implements OnInit, OnDestroy {


    constructor(
        private cameraPreview: CameraPreview
    ) { }

    ngOnInit() {
        const cameraPreviewOpts: CameraPreviewOptions = {
            x: 0,
            y: 0,
            width: window.screen.width,
            height: window.screen.height,
            camera: 'rear',
            tapPhoto: true,
            previewDrag: false,
            toBack: true,
            alpha: 1
        }

        // start camera
        this.cameraPreview.startCamera(cameraPreviewOpts).then(
            (res) => {
                console.log(res)
            },
            (err) => {
                console.log(err)
            });
    }

    ngOnDestroy() {
        this.stopCamera();
    }

    // picture options
    //  const pictureOpts: CameraPreviewPictureOptions = {
    //     width: 1280,
    //     height: 1280,
    //     quality: 85
    // }

    // let picture = "xx"

    // // take a picture
    // this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
    //     picture = 'data:image/jpeg;base64,' + imageData;
    // }, (err) => {
    //     console.log(err);
    //     picture = 'assets/img/test.jpg';
    // });

    // // take a snap shot
    // this.cameraPreview.takeSnapshot(pictureOpts).then((imageData) => {
    //     picture = 'data:image/jpeg;base64,' + imageData;
    // }, (err) => {
    //     console.log(err);
    //     picture = 'assets/img/test.jpg';
    // });

    switchCamera() {
        // Switch camera
        this.cameraPreview.switchCamera();
    }

    colorEffect() {
        // set color effect to negative
        this.cameraPreview.setColorEffect('negative');
    }

    stopCamera() {
        // Stop the camera preview
        this.cameraPreview.stopCamera();
    }
}
