var singServices = angular.module('singServices', []);

singServices.factory('allHttpInterceptor', function(bsLoadingOverlayHttpInterceptorFactoryFactory) {
    return bsLoadingOverlayHttpInterceptorFactoryFactory();
})
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('allHttpInterceptor');
    }).run(function(bsLoadingOverlayService) {
        bsLoadingOverlayService.setGlobalConfig({
            templateUrl: 'loading-overlay-template.html'
        });
    });