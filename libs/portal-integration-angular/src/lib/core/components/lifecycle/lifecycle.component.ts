import { Component, Input } from '@angular/core'

export interface LifecycleStep {
  id: string
  title: string
  details?: string
}

/**
 * @deprecated This component was moved to angular-accelerator
 */
@Component({
  selector: 'ocx-lifecycle',
  templateUrl: './lifecycle.component.html',
})
export class LifecycleComponent {
  @Input() steps: LifecycleStep[] = []
  @Input() activeStepId: string | undefined
}
