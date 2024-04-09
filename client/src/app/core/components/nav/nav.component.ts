import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @ViewChild('nav') nav!: ElementRef<HTMLElement>;
  ngOnInit() {
    document.addEventListener('scroll', (ev) => {
      if (window.scrollY > 60) {
        this.nav.nativeElement.classList.add('bg');
      } else {
        this.nav.nativeElement.classList.remove('bg');
      }
    });
  }
}
