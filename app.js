var headerName = document.getElementById('headerName');
var occupation = document.getElementById('headerTitle');
var info = document.getElementById('headerInfo');

var schoolName = document.getElementById('schoolName');
var schoolField = document.getElementById('schoolField');
var schoolDuration = document.getElementById('schoolDuration');

var collegeName = document.getElementById('collegeName');
var collegeField = document.getElementById('collegeField');
var collegeDuration = document.getElementById('collegeDuration');

var uniName = document.getElementById('uniName');
var uniField = document.getElementById('uniField');
var uniDuration = document.getElementById('uniDuration');

var saylani = document.getElementById('saylani');
var saylaniField = document.getElementById('saylaniField');
var saylaniDuration = document.getElementById('saylaniDuration');

var workExp1 = document.getElementById('workExp1');
var workExp2 = document.getElementById('workExp2');

var name = document.getElementById('name');
var birthday = document.getElementById('birthday');
var email = document.getElementById('email');
var github = document.getElementById('github');
var address = document.getElementById('address');

var p1Skill1 = document.getElementById('p1Skill1');
var p1Skill2 = document.getElementById('p1Skill2');
var p1Skill3 = document.getElementById('p1Skill3');
var p1Skill4 = document.getElementById('p1Skill4');

var p2Skill1 = document.getElementById('p2Skill1');
var p2Skill2 = document.getElementById('p2Skill2');
var p2Skill3 = document.getElementById('p2Skill3');

var p3Skill1 = document.getElementById('p3Skill1');
var p3Skill2 = document.getElementById('p3Skill2');
var p3Skill3 = document.getElementById('p3Skill3');


var object = {
    headerName : 'Muhammad Danish Zeeshan',
    occupation : 'Programmer' ,
    info : 'Hey ! Im Muhammad Danish Zeeshan. Im Very Passionate To Learn The Deeds And Designing Interfaces While Taking Into Condsideration The Latest Trends And Techniques.',
    school :{
        name : 'Noor Ul Huda Academy',
        field : 'Science' ,
        duraton : '2010-2011' 
    },
    college : {
        name : 'Defence Cambridge College',
        field : 'Pre-Engineering' ,
        duraton : '2012-2013'
    },
    uni : {
        name : 'IQRA University',
        field : 'BS CS' ,
        duraton : '2014-Going On'
    },
    saylani : {
        name : 'Saylani Walfare Int. Trust',
        field : 'Mass Training' ,
        duraton : '2016-Going On'
    },
    workExp : {
        workExp1 : 'FIF Blood/Sugar Test Camp (Volunteer)',
        workExp2 : 'Saylani Annual Symposium (Volunteer)'
    },
    personalInfo : {
        name : 'Muhammad Danish Zeeshan',
        birthday : '28th December 1994',
        email : 'dzeeshan4u@gmail.com' ,
        github : 'https://github.com/Danziee4u',
        address : 'B-462 BLK1 Metroville SITE KARACHI'
    },
    proficiency : {
        skill1 : 'Photoshop',
        skill2 : 'Illustrator',
        skill3 : 'Inpage',
        skill4 : 'MS Office'
    },
        professional : {
        skill1 : 'Graphic Design',
        skill2 : 'Web Design',
        skill3 : 'Javascript'
    },
        personal : {
        skill1 : 'Learning',
        skill2 : 'Hardworking',
        skill3 : 'Creative',
    }

};

headerName.innerHTML = object.headerName;
occupation.innerHTML = object.occupation;
info.innerHTML = object.info;

schoolName.innerHTML = object.school.name;
schoolField.innerHTML = object.school.field;
schoolDuration.innerHTML = object.school.duraton;

collegeName.innerHTML = object.college.name;
collegeField.innerHTML = object.college.field;
collegeDuration.innerHTML = object.college.duraton;

uniName.innerHTML = object.uni.name;
uniField.innerHTML = object.uni.field;
uniDuration.innerHTML = object.uni.duraton;

saylani.innerHTML = object.saylani.name;
saylaniField.innerHTML = object.saylani.field;
saylaniDuration.innerHTML = object.saylani.duraton;

workExp1.innerHTML = object.workExp.workExp1;
workExp2.innerHTML = object.workExp.workExp2;

name.innerHTML = object.personalInfo.name;
birthday.innerHTML = object.personalInfo.birthday;
email.innerHTML = object.personalInfo.email;
github.innerHTML = object.personalInfo.github;
address.innerHTML = object.personalInfo.address;

p1Skill1.innerHTML = object.proficiency.skill1;
p1Skill2.innerHTML = object.proficiency.skill2;
p1Skill3.innerHTML = object.proficiency.skill3;
p1Skill4.innerHTML = object.proficiency.skill4;

p2Skill1.innerHTML = object.professional.skill1;
p2Skill2.innerHTML = object.professional.skill2;
p2Skill3.innerHTML = object.professional.skill3;

p3Skill1.innerHTML = object.personal.skill1;
p3Skill2.innerHTML = object.personal.skill2;
p3Skill3.innerHTML = object.personal.skill3;


