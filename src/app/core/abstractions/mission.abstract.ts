export class BaseMission {
  /**
   * Retrieve the mission from the passed date
   *
   * @param startingDate the starting date of the mission
   * @param type the type of mardown file to fetch
   * @return description the mission description we want to display
   */
  missionFromDate(startingDate: string, type: string): string {
    const date = new Date(startingDate);
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    return `/assets/resume/missions/${date.getFullYear()}${month}/${date.getFullYear()}${month}_${type}.md`;
  }

  /**
   * Construct the date to timelapse to be displayed on a mission
   *
   * @param start the date (string) on which the mission started
   * @param end the date (string) on which the mission ended
   * @return the label representing the mission timelapse
   */
  missionTimelapse(start: string, end?: string): string {
    if (end)
      return `${this.formatDate(new Date(start))} - ${this.formatDate(new Date(end))} (${this.missionDuration(
        start,
        end
      )})`;
    return `${this.formatDate(new Date(start))} - en cours (${this.missionDuration(start, end)})`;
  }

  /**
   * Format the given date and return it as a string
   *
   * @param date the date
   * @return the formated date
   */
  formatDate(date: Date): string {
    const addTwoDigits = (number: number): string => (number < 10 ? `0${number}` : `${number}`);
    return `${addTwoDigits(date.getDate())}/${addTwoDigits(date.getMonth() + 1)}/${date.getFullYear()}`;
  }

  /**
   * Calculate the mission duration
   *
   * @param {string} start the date on which the mission started
   * @param {string} end the date on which the mission ended
   * @return label representing the mission duration
   */
  missionDuration(start: string, end?: string): string {
    const startTimestamp = Date.parse(start);
    const startDate = new Date(startTimestamp);
    let endDate = new Date(Date.now());
    if (end) {
      const endTimestamp = Date.parse(end);
      endDate = new Date(endTimestamp);
    }
    if (this.monthBetweenDates(startDate, endDate) > 12 && this.monthBetweenDates(startDate, endDate) % 12 > 0) {
      const years = Math.trunc(this.monthBetweenDates(startDate, endDate) / 12);
      const months = this.monthBetweenDates(startDate, endDate) % 12;
      return `${years} an${years > 1 ? 's' : ''} et ${months} mois`;
    }
    return `${this.monthBetweenDates(startDate, endDate)} mois`;
  }

  /**
   * Calculate the number of month between two dates
   *
   * @param {Date} start the starting date
   * @param {Date} end the ending date
   * @return number representing the number of months
   */
  monthBetweenDates(start: Date, end: Date): number {
    let months: number;
    months = (end.getFullYear() - start.getFullYear()) * 12;
    months -= start.getMonth();
    months += end.getMonth();
    return months <= 0 ? 0 : months;
  }
}
