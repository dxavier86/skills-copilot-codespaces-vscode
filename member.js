function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}