const clubList = [{
    league: {
        id: 'Premier League',
        country: 'England',
        teams: [{
            club: 'Arsenal',
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
            club: 'Bournemouth',
            stadium: 'Vitality Stadium',
            capacity: 11464,
            badge: 'afcb.png',
            sponsor: 'vitality.png',
            rival: 'Southampton',
            founded: 1890,
            opened: 1910,
            hashTag: '#AFCB',
            knownAs: 'The Cherries'
        }, {
            club: 'Brighton and Hove Albion',
            stadium: 'Amex Stadium',
            capacity: 22374,
            badge: 'bhafc.png',
            sponsor: 'amex.png',
            rival: 'Crystal Palace',
            founded: 1901,
            opened: 2011,
            hashTag: '#BHAFC',
            knownAs: 'The Seagulls'
        }, {
            club: 'Burnley',
            stadium: 'Turf Moor',
            capacity: 22546,
            badge: 'bfc.png',
            sponsor: 'BLANK.png',
            rival: 'Blackburn Rovers',
            founded: 1882,
            opened: 1883,
            hashTag: '#BFC',
            knownAs: 'The Clarets'
        }, {
            club: 'Chelsea',
            stadium: 'Stamford Bridge',
            capacity: 41837,
            badge: 'cfc.png',
            sponsor: 'BLANK.png',
            rival: 'Fulham',
            founded: 1905,
            opened: 1905,
            hashTag: '#CFC',
            knownAs: 'The Blues'
        }, {
            club: 'Crystal Palace',
            stadium: 'Selhurst Park',
            capacity: 26309,
            badge: 'cpfc.png',
            sponsor: 'BLANK.png',
            rival: 'Charlton Athletic',
            founded: 1905,
            opened: 1924,
            hashTag: '#CPFC',
            knownAs: 'The Eagles'
        }, {
            club: 'Everton',
            stadium: 'Goodison Park',
            capacity: 40157,
            badge: 'efc.png',
            sponsor: 'BLANK.png',
            rival: 'Liverpool',
            founded: 1878,
            opened: 1892,
            hashTag: '#EFC',
            knownAs: 'The Toffees'
        }, {
            club: 'Huddersfield Town',
            stadium: 'The John Smith\'s Stadium',
            capacity: 24500,
            badge: 'htafc.png',
            sponsor: 'johnsmith.png',
            rival: 'Leeds United',
            founded: 1908,
            opened: 1994,
            hashTag: '#HTAFC',
            knownAs: 'The Terriers'
        }, {
            club: 'Leicester City',
            stadium: 'King Power Stadium',
            capacity: 32262,
            badge: 'lcfc.png',
            sponsor: 'kingPower.png',
            rival: 'Derby County',
            founded: 1884,
            opened: 2002,
            hashTag: '#LCFC',
            knownAs: 'The Foxes'
        }, {
            club: 'Liverpool',
            stadium: 'Anfield',
            capacity: 45522,
            badge: 'lfc.png',
            sponsor: 'BLANK.png',
            rival: 'Everton',
            founded: 1892,
            opened: 1884,
            hashTag: '#LFC',
            knownAs: 'The Reds'
        }, {
            club: 'Manchester City',
            stadium: 'Etihad Stadium',
            capacity: 47805,
            badge: 'mcfc.png',
            sponsor: 'etihad.png',
            rival: 'Manchester United',
            founded: 1880,
            opened: 2002,
            hashTag: '#MCFC',
            knownAs: 'The Citizens'
        }, {
            club: 'Manchester United',
            stadium: 'Old Trafford',
            capacity: 75811,
            badge: 'mufc.png',
            sponsor: 'BLANK.png',
            rival: 'Manchester City',
            founded: 1878,
            opened: 1910,
            hashTag: '#MUFC',
            knownAs: 'The Red Devils'
        }, {
            club: 'Newcastle United',
            stadium: 'St James\' Park',
            capacity: 52387,
            badge: 'nufc.png',
            sponsor: 'BLANK.png',
            rival: 'Sunderland',
            founded: 1892,
            opened: 1892,
            hashTag: '#NUFC',
            knownAs: 'The Magpies'
        }, {
            club: 'Southampton',
            stadium: 'St Mary\'s Stadium',
            capacity: 32689,
            badge: 'saintsfc.png',
            sponsor: 'BLANK.png',
            rival: 'Portsmouth',
            founded: 1885,
            opened: 2001,
            hashTag: '#SaintsFC',
            knownAs: 'The Saints'
        }, {
            club: 'Stoke City',
            stadium: 'Britannia Stadium',
            capacity: 27598,
            badge: 'scfc.png',
            sponsor: 'britannia.png',
            rival: 'Port Vale',
            founded: 1863,
            opened: 1997,
            hashTag: '#SCFC',
            knownAs: 'The Potters'
        }, {
            club: 'Swansea City',
            stadium: 'Liberty Stadium',
            capacity: 20532,
            badge: 'swans.png',
            sponsor: 'liberty.png',
            rival: 'Cardiff City',
            founded: 1912,
            opened: 2005,
            hashTag: '#Swans',
            knownAs: 'The Swans'
        }, {
            club: 'Tottenham Hotspur',
            stadium: 'White Hart Lane',
            capacity: 36230,
            badge: 'coys.png',
            sponsor: 'BLANK.png',
            rival: 'Arsenal',
            founded: 1882,
            opened: 1899,
            hashTag: '#COYS',
            knownAs: 'Spurs'
        }, {
            club: 'Watford',
            stadium: 'Vicarage Road',
            capacity: 17477,
            badge: 'watfordfc.png',
            sponsor: 'BLANK.png',
            rival: 'Luton Town',
            founded: 1881,
            opened: 1922,
            hashTag: '#WatfordFC',
            knownAs: 'The Hornets'
        }, {
            club: 'West Bromwich Albion',
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
            club: 'West Ham United',
            stadium: 'Boleyn Ground',
            capacity: 35016,
            badge: 'whufc.png',
            sponsor: 'BLANK.png',
            rival: 'Millwall',
            founded: 1895,
            opened: 1904,
            hashTag: '#WHUFC',
            knownAs: 'The Hammers'
        }]
    }
}]
