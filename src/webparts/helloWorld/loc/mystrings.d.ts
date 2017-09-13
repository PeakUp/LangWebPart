declare interface IHelloWorldStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  ApplicationTitle:string;
}

declare module 'helloWorldStrings' {
  const strings: IHelloWorldStrings;
  export = strings;
}
