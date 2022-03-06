import moment from 'moment-timezone';
import _ from 'underscore';
import { Config, TableProps, Zones } from '@Types/timezone';
import momentDurationFormatSetup from 'moment-duration-format';
import config from '@data/timezone.json';
import { matchSorter } from 'match-sorter';

momentDurationFormatSetup(moment as any);

class Tz {
  public get moment() {
    return moment;
  }

  private get _zones(): Array<Zones> {
    const temp: any = {};

    return _.unique(
      this.moment.tz.names().map(name => {
        const mtz = this.moment.tz(name);

        const zone = mtz.format('z');
        const offset = mtz.utcOffset();

        temp[name] = { offset, zone };

        return name;
      }),
    ).map(name => ({ name, ...temp[name] }));
  }

  public table(): TableProps[] {
    const zones = this._zones;

    const newZones: TableProps[] = zones.map(({ zone, name, offset }) => {
      return {
        name: zone,
        timezone: name,
        offset: offset.toString(),
      };
    });

    return newZones;
  }

  private config(): Config {
    return config;
  }

  boxTimezones(): string[] {
    const config = this.config();

    return config?.timezones;
  }

  search(query: string) {
    const table = this.table();

    return matchSorter(table, query, { keys: ['name', 'timezone'] });
  }
}

export const tz = new Tz();
export default tz;
