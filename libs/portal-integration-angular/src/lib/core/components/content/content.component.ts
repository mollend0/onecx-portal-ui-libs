import { Component, Input } from '@angular/core'

/**
 * @deprecated This component was moved to angular-accelerato
 */
@Component({
  selector: 'ocx-content',
  templateUrl: './content.component.html',
})
export class OcxContentComponent {
  /**
   * Optionally allows specifying a title for the content card
   */
  @Input() title = ''
}
