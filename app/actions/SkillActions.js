import Firebase from 'firebase';
const dataRef = new Firebase('https://unleash-app-staging.firebaseio.com/skills');

export function skillList(onSuccess) {
  return (dispatch) => {
    dispatch(doSkillList());

    dataRef.on('value', (snapshot) => {
      const skills = [];
      snapshot.forEach((skill) => {
        skills.push(skill.val());
      });
      dispatch(skillListSuccess(skills));

      if (typeof onSuccess !== 'undefined'){
        onSuccess();
      }
    }, (error) => {
      dispatch(skillListFailure(error))
    });
  }
}

function doSkillList() {
  return {type: 'SKILL_LIST'};
}

export function skillListSuccess(skills) {
  return {type: 'SKILL_LIST_SUCCESS', skills};
}

export function skillListFailure(errors) {
  return {type: 'SKILL_LIST_FAILURE', errors};
}
