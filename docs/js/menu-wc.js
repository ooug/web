'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">web documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutModule.html" data-type="entity-link">AboutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutModule-4209b8a37e3c8d73ba2899b356f25ed8"' : 'data-target="#xs-components-links-module-AboutModule-4209b8a37e3c8d73ba2899b356f25ed8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutModule-4209b8a37e3c8d73ba2899b356f25ed8"' :
                                            'id="xs-components-links-module-AboutModule-4209b8a37e3c8d73ba2899b356f25ed8"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsletterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NewsletterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ActivitiesModule.html" data-type="entity-link">ActivitiesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ActivitiesModule-cf4a76bf374e821f1ae1bea8d0f0e79a"' : 'data-target="#xs-components-links-module-ActivitiesModule-cf4a76bf374e821f1ae1bea8d0f0e79a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ActivitiesModule-cf4a76bf374e821f1ae1bea8d0f0e79a"' :
                                            'id="xs-components-links-module-ActivitiesModule-cf4a76bf374e821f1ae1bea8d0f0e79a"' }>
                                            <li class="link">
                                                <a href="components/ActivitiesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActivitiesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ActivitiesModule-cf4a76bf374e821f1ae1bea8d0f0e79a"' : 'data-target="#xs-injectables-links-module-ActivitiesModule-cf4a76bf374e821f1ae1bea8d0f0e79a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ActivitiesModule-cf4a76bf374e821f1ae1bea8d0f0e79a"' :
                                        'id="xs-injectables-links-module-ActivitiesModule-cf4a76bf374e821f1ae1bea8d0f0e79a"' }>
                                        <li class="link">
                                            <a href="injectables/ActivitiesService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ActivitiesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0734b8380b6a3b5ace5bfaedb51a9f4e"' : 'data-target="#xs-components-links-module-AppModule-0734b8380b6a3b5ace5bfaedb51a9f4e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0734b8380b6a3b5ace5bfaedb51a9f4e"' :
                                            'id="xs-components-links-module-AppModule-0734b8380b6a3b5ace5bfaedb51a9f4e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ErrorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaintenanceComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MaintenanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OfflineComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OfflineComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-93bfc504d7ea194970e20b09658cd407"' : 'data-target="#xs-components-links-module-AuthModule-93bfc504d7ea194970e20b09658cd407"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-93bfc504d7ea194970e20b09658cd407"' :
                                            'id="xs-components-links-module-AuthModule-93bfc504d7ea194970e20b09658cd407"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OtpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OtpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResetPasswordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link">AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BlogModule.html" data-type="entity-link">BlogModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BlogModule-a9be58f722d949a6ccde516a7dfe5478"' : 'data-target="#xs-components-links-module-BlogModule-a9be58f722d949a6ccde516a7dfe5478"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BlogModule-a9be58f722d949a6ccde516a7dfe5478"' :
                                            'id="xs-components-links-module-BlogModule-a9be58f722d949a6ccde516a7dfe5478"' }>
                                            <li class="link">
                                                <a href="components/BlogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlogPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PopularBlogsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PopularBlogsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BlogModule-a9be58f722d949a6ccde516a7dfe5478"' : 'data-target="#xs-injectables-links-module-BlogModule-a9be58f722d949a6ccde516a7dfe5478"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BlogModule-a9be58f722d949a6ccde516a7dfe5478"' :
                                        'id="xs-injectables-links-module-BlogModule-a9be58f722d949a6ccde516a7dfe5478"' }>
                                        <li class="link">
                                            <a href="injectables/BlogService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BlogService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GalleryModule.html" data-type="entity-link">GalleryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GalleryModule-b3eead45902e66e9cb572ec083c22e47"' : 'data-target="#xs-components-links-module-GalleryModule-b3eead45902e66e9cb572ec083c22e47"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GalleryModule-b3eead45902e66e9cb572ec083c22e47"' :
                                            'id="xs-components-links-module-GalleryModule-b3eead45902e66e9cb572ec083c22e47"' }>
                                            <li class="link">
                                                <a href="components/GalleryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GalleryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-0c4e6170f30f31f5805808f2bda47f78"' : 'data-target="#xs-components-links-module-HomeModule-0c4e6170f30f31f5805808f2bda47f78"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-0c4e6170f30f31f5805808f2bda47f78"' :
                                            'id="xs-components-links-module-HomeModule-0c4e6170f30f31f5805808f2bda47f78"' }>
                                            <li class="link">
                                                <a href="components/EventDetailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TechnologyStackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TechnologyStackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpcomingEventsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpcomingEventsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MembersModule.html" data-type="entity-link">MembersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MembersModule-56cb140c58054afa0933131179eafcbd"' : 'data-target="#xs-components-links-module-MembersModule-56cb140c58054afa0933131179eafcbd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MembersModule-56cb140c58054afa0933131179eafcbd"' :
                                            'id="xs-components-links-module-MembersModule-56cb140c58054afa0933131179eafcbd"' }>
                                            <li class="link">
                                                <a href="components/MembersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MembersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MembersRoutingModule.html" data-type="entity-link">MembersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ConfirmPasswordValidator.html" data-type="entity-link">ConfirmPasswordValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/RollNumberValidator.html" data-type="entity-link">RollNumberValidator</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GlobalService.html" data-type="entity-link">GlobalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HelperService.html" data-type="entity-link">HelperService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerInterceptorService.html" data-type="entity-link">LoggerInterceptorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UrlsService.html" data-type="entity-link">UrlsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptorService.html" data-type="entity-link">TokenInterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthorizedGuard.html" data-type="entity-link">AuthorizedGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/UnauthorizedGuard.html" data-type="entity-link">UnauthorizedGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Farewell.html" data-type="entity-link">Farewell</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImageSlider.html" data-type="entity-link">ImageSlider</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Techbhukkads.html" data-type="entity-link">Techbhukkads</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Workshop.html" data-type="entity-link">Workshop</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});