import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CameraPreviewPage } from './cameraPreview.page';
import { RouterTestingModule } from '@angular/router/testing';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

describe('HomePage', () => {
    let component: CameraPreviewPage;
    let fixture: ComponentFixture<CameraPreviewPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CameraPreviewPage],
            imports: [IonicModule.forRoot(), RouterTestingModule],
            providers: [CameraPreview]
        }).compileComponents();

        fixture = TestBed.createComponent(CameraPreviewPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

});