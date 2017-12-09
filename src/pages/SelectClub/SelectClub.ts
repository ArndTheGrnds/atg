import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ClubDetails } from '../ClubDetails/ClubDetails';

const clubList = [{
    league: {
        id: 'Premier League',
        country: 'England',
        teams: [{
            name: 'Arsenal',
            stadium: 'Emirates Stadium',
            capacity: 60361,
            badge: 'arsenal.png',
            sponsor: 'emirates.png',
            rival: 'Tottenham Hotspurs',
            founded: 1886,
            opened: 2006,
            hashTag: '#Arsenal',
            knownAs: 'The Gunners'
        }, {
            name: 'Bournemouth',
            stadium: 'Vitality Stadium',
            capacity: 11464,
            badge: 'bournmouth.png',
            sponsor: 'vitality.png',
            rival: 'Southampton',
            founded: 1890,
            opened: 1910,
            hashTag: '#AFCB',
            knownAs: 'The Cherries'
        }, {
            name: 'Brighton and Hove Albion',
            stadium: 'Amex Stadium',
            capacity: 22374,
            badge: 'brighton.png',
            sponsor: 'amex.png',
            rival: 'Crystal Palace',
            founded: 1901,
            opened: 2011,
            hashTag: '#BHAFC',
            knownAs: 'The Seagulls'
        }, {
            name: 'Burnley',
            stadium: 'Turf Moor',
            capacity: 22546,
            badge: 'burnley.png',
            sponsor: 'BLANK.png',
            rival: 'Blackburn Rovers',
            founded: 1882,
            opened: 1883,
            hashTag: '#BFC',
            knownAs: 'The Clarets'
        }, {
            name: 'Chelsea',
            stadium: 'Stamford Bridge',
            capacity: 41837,
            badge: 'chelsea.png',
            sponsor: 'BLANK.png',
            rival: 'Fulham',
            founded: 1905,
            opened: 1905,
            hashTag: '#CFC',
            knownAs: 'The Blues'
        }, {
            name: 'Crystal Palace',
            stadium: 'Selhurst Park',
            capacity: 26309,
            badge: 'crystalPalace.png',
            sponsor: 'BLANK.png',
            rival: 'Charlton Athletic',
            founded: 1905,
            opened: 1924,
            hashTag: '#CPFC',
            knownAs: 'The Eagles'
        }, {
            name: 'Everton',
            stadium: 'Goodison Park',
            capacity: 40157,
            badge: 'everton.png',
            sponsor: 'BLANK.png',
            rival: 'Liverpool',
            founded: 1878,
            opened: 1892,
            hashTag: '#EFC',
            knownAs: 'The Toffees'
        }, {
            name: 'Huddersfield Town',
            stadium: 'The John Smith\'s Stadium',
            capacity: 24500,
            badge: 'huddersfield.png',
            sponsor: 'johnsmith.png',
            rival: 'Leeds United',
            founded: 1908,
            opened: 1994,
            hashTag: '#HTAFC',
            knownAs: 'The Terriers'
        }, {
            name: 'Leicester City',
            stadium: 'King Power Stadium',
            capacity: 32262,
            badge: 'leicester.png',
            sponsor: 'kingPower.png',
            rival: 'Derby County',
            founded: 1884,
            opened: 2002,
            hashTag: '#LCFC',
            knownAs: 'The Foxes'
        }, {
            name: 'Liverpool',
            stadium: 'Anfield',
            capacity: 45522,
            badge: 'liverpool.png',
            sponsor: 'BLANK.png',
            rival: 'Everton',
            founded: 1892,
            opened: 1884,
            hashTag: '#LFC',
            knownAs: 'The Reds'
        }, {
            name: 'Manchester City',
            stadium: 'Etihad Stadium',
            capacity: 47805,
            badge: 'manchesterCity.png',
            sponsor: 'etihad.png',
            rival: 'Manchester United',
            founded: 1880,
            opened: 2002,
            hashTag: '#MCFC',
            knownAs: 'The Citizens'
        }, {
            name: 'Manchester United',
            stadium: 'Old Trafford',
            capacity: 75811,
            badge: 'manchesterUnited.png',
            sponsor: 'BLANK.png',
            rival: 'Manchester City',
            founded: 1878,
            opened: 1910,
            hashTag: '#MUFC',
            knownAs: 'The Red Devils'
        }, {
            name: 'Newcastle United',
            stadium: 'St James\' Park',
            capacity: 52387,
            badge: 'newcastle.png',
            sponsor: 'BLANK.png',
            rival: 'Sunderland',
            founded: 1892,
            opened: 1892,
            hashTag: '#NUFC',
            knownAs: 'The Magpies'
        }, {
            name: 'Southampton',
            stadium: 'St Mary\'s Stadium',
            capacity: 32689,
            badge: 'southampton.png',
            sponsor: 'BLANK.png',
            rival: 'Portsmouth',
            founded: 1885,
            opened: 2001,
            hashTag: '#SaintsFC',
            knownAs: 'The Saints'
        }, {
            name: 'Stoke City',
            stadium: 'Britannia Stadium',
            capacity: 27598,
            badge: 'stoke.png',
            sponsor: 'britannia.png',
            rival: 'Port Vale',
            founded: 1863,
            opened: 1997,
            hashTag: '#SCFC',
            knownAs: 'The Potters'
        }, {
            name: 'Swansea City',
            stadium: 'Liberty Stadium',
            capacity: 20532,
            badge: 'swansea.png',
            sponsor: 'liberty.png',
            rival: 'Cardiff City',
            founded: 1912,
            opened: 2005,
            hashTag: '#Swans',
            knownAs: 'The Swans'
        }, {
            name: 'Tottenham Hotspur',
            stadium: 'White Hart Lane',
            capacity: 36230,
            badge: 'tottenham.png',
            sponsor: 'BLANK.png',
            rival: 'Arsenal',
            founded: 1882,
            opened: 1899,
            hashTag: '#COYS',
            knownAs: 'Spurs'
        }, {
            name: 'Watford',
            stadium: 'Vicarage Road',
            capacity: 17477,
            badge: 'watford.png',
            sponsor: 'BLANK.png',
            rival: 'Luton Town',
            founded: 1881,
            opened: 1922,
            hashTag: '#WatfordFC',
            knownAs: 'The Hornets'
        }, {
            name: 'West Bromwich Albion',
            stadium: 'The Hawthorns',
            capacity: 26272,
            badge: 'wba.png',
            sponsor: 'BLANK.png',
            rival: 'Wolverhampton Wanderers',
            founded: 1878,
            opened: 1900,
            hashTag: '#WBA',
            knownAs: 'The Baggies'
        }, {
            name: 'West Ham United',
            stadium: 'Boleyn Ground',
            capacity: 35016,
            badge: 'westHam.png',
            sponsor: 'BLANK.png',
            rival: 'Millwall',
            founded: 1895,
            opened: 1904,
            hashTag: '#WHUFC',
            knownAs: 'The Hammers'
        }]
    }
}]

@Component({
  selector: 'selectclub',
  templateUrl: 'SelectClub.html'
})
export class SelectClub {
  premierLeagueTeams = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    clubList.forEach(i => {
      if (i.league.id === 'Premier League') {
        i.league.teams.forEach(team => {
          this.premierLeagueTeams.push(team);
        });
      }
    });
  }

  itemTapped(event, club) {
    this.navCtrl.push(ClubDetails, {
      club: club
    });
  }
}
