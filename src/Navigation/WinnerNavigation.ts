import { INavigationService } from "./INavigationService";

export class NavigationSerivce implements INavigationService{
    navigateTo(url: string): void {
        location.assign(url)
    }
}