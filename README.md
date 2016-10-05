# ng-message-showcase
define the error message in angular 1.X project


before 1.4
<div ng-messages="requestForm.email.$error" ng-messages-include="form-messages"></div>

after 
<div ng-messages="requestForm.email.$error">
    <div ng-messages-include="form-messages"></div>
</div>
