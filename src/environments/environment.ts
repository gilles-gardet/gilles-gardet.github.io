// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  missions: [
    {
      client: 'Air France - Dev Portal',
      startDate: '2019-01-01',
      endDate: null,
    },
    {
      client: 'Orange - SPDP & O2H',
      startDate: '2020-12-01',
      endDate: null,
    },
    {
      client: 'MAIF - Gimaweb',
      startDate: '2020-07-01',
      endDate: '2020-12-01',
    },
    {
      client: 'Air France - CCAPI',
      startDate: '2016-07-01',
      endDate: '2019-01-01',
    },
    {
      client: 'Airbus - GAS',
      startDate: '2016-01-01',
      endDate: '2016-07-01',
    },
    {
      client: 'GFI - Gimaweb',
      startDate: '2015-04-01',
      endDate: '2016-01-01',
    },
    {
      client: 'Mairie de Toulouse - Portail interne',
      startDate: '2015-01-01',
      endDate: '2015-04-01',
    },
    {
      client: 'Airbus - Flight Ops Document Manager',
      startDate: '2013-04-01',
      endDate: '2015-01-01',
    },
  ],
  tools: [
    { name: 'HTML', rate: 80 },
    { name: 'Java', rate: 90 },
    { name: 'Spring Boot', rate: 85 },
    { name: 'Spring MVC', rate: 85 },
    { name: 'Spring Data', rate: 75 },
    { name: 'Spring Security', rate: 70 },
    { name: 'CSS', rate: 75 },
    { name: 'Sass', rate: 75 },
    { name: 'Javascript', rate: 80 },
    { name: 'SQL', rate: 70 },
    { name: 'TypeScript', rate: 80 },
    { name: 'Angular', rate: 85 },
    { name: 'NestJS', rate: 70 },
    { name: 'ReactJS', rate: 65 },
    { name: 'Hibernate', rate: 80 },
    { name: 'Typeorm', rate: 70 },
    { name: 'Kotlin', rate: 80 },
  ],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
