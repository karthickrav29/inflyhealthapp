export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }
   
    public Time: any;
    public Attitude: any;
    public CurrentUsage: any;
    public Received: any;
    public Transmitted: any;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor() {
        super();
        this.push(new CountryRenewableElectricityItem(
        {
            Time: `1:00`,
            Attitude: 4,
            Transmitted: 21,
            Received: 19,
           
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            Time: `1:15`,
            Attitude: 10,
            Transmitted: 14,
            Received: 33,
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            Time: `1:30`,
            Attitude: 13,
            Transmitted: 19,
            Received: 38,
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            Time: `1:40`,
            Attitude: 15,
            Transmitted: 22,
            Received: 42,
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            Time: `2:00`,
            Attitude: 20,
            Transmitted: 26,
            Received: 49,
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            Time: `2:10`,
            Attitude: 22,
            Transmitted: 29,
            Received: 54,
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            Time: `2:20`,
            Attitude: 34,
            Transmitted: 33,
            Received: 58,
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            Time: `2:40`,
            Attitude: 27,
            Transmitted: 39,
            Received: 67,
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            Time: `1:00`,
            Attitude: 30,
            Transmitted: 43,
            Received: 87,
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            Time: `3:00`,
            Attitude: 34,
            Transmitted: 48,
            Received: 90,
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            Time: `3:10`,
            Attitude: 38,
            Transmitted: 55,
            Received: 94,
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            Time: `3:30`,
            Attitude: 43,
            Transmitted: 56,
            Received: 98,
        }));
    }
}