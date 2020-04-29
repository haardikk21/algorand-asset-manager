import { Component, OnInit } from '@angular/core'
import { StateService } from 'src/app/state.service'
import { Subscription } from 'rxjs'
import { Token } from 'src/app/token'

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
    showTokenSubscription: Subscription
    selectedTokenSubscription: Subscription

    showTokenCreate: boolean
    selectedToken: Token

    dropdownIsActive: boolean = false
    activeNetwork: String = 'testnet'

    constructor(private stateService: StateService) {
        this.showTokenSubscription = this.stateService
            .getShowCreateToken()
            .subscribe((b) => {
                this.showTokenCreate = b
            })

        this.selectedTokenSubscription = this.stateService
            .getSelectedToken()
            .subscribe((t) => {
                this.selectedToken = t
            })
    }

    ngOnInit() {}

    toggleDropdown() {
        this.dropdownIsActive = !this.dropdownIsActive
    }

    setMainnetActive() {
        this.activeNetwork = 'mainnet'
        this.dropdownIsActive = false
    }

    setTestnetActive() {
        this.activeNetwork = 'testnet'
        this.dropdownIsActive = false
    }

    setBetanetActive() {
        this.activeNetwork = 'betanet'
        this.dropdownIsActive = false
    }
}
