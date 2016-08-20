import { Component }        from '@angular/core';

@Component({
    selector: 'lists',
    template: require('./lists.html')
})

export class ListsComponent {

    public youtubeFitnessPersonalities: any[] = [
        {name: 'Rich Piana', description: 'Freak beyond belief. Good entertainment.', url: 'https://www.youtube.com/user/1DAYUMAY'},
        {name: 'Athlean-X', description: 'Jeff Cavaliere is a former pro trainer. Good stuff', url: 'https://www.youtube.com/user/JDCav24'},
        {name: 'Functional Patterns', description: 'Functional stuff with Naudi Aguilar', url: 'https://www.youtube.com/user/functionalpatterns'},
        {name: 'Infinite Elgintensity', description: 'Esquisite Crossfit and Youtube fitness trolling', url: 'https://www.youtube.com/user/Elgintensity'},
        {name: 'CT Fletcher Motivation', description: 'Stupid X-con guy. Entertaining.', url: 'https://www.youtube.com/user/CTTheTrainer'}

    ];


    constructor() {}
};