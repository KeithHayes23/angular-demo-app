import { Component, ViewEncapsulation } from '@angular/core';
import { CommonListItemComponent } from '../../common';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';

@Component({
  selector: 'app-aws-common',
  templateUrl: './aws-common.component.html',
  styleUrls: ['./aws-common.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AwsCommonComponent{
  awsImage: string = "../assets/aws-icons/aws.svg";
  angularImage: string = "../assets/aws-icons/angular.svg";
  services: Object[] = [
    {mdname:"dynamodb", name:"DynamoDB", routerLink:"/dynamodb", description:"NoSQL Database", sourceImage:"../assets/aws-icons/dynamodb.svg"},
    {mdname:"s3", name:"S3", description:"Simple Storage Services", sourceImage:"../assets/aws-icons/s3.svg"},
    {mdname:"cloudformation", name:"CloudFormation", description:"Infrastructure as Code", sourceImage:"../assets/aws-icons/cloudformation.svg"},
    {mdname:"lambda", name:"Lambda", description:"Functions as a Service", sourceImage:"../assets/aws-icons/lambda.svg"},
    {mdname:"apigateway", name:"API Gateway", description:"Restfull Web API", sourceImage:"../assets/aws-icons/apigateway.svg"}
  ];

  constructor(mdIconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    mdIconRegistry
        .addSvgIcon('dynamodb',
            sanitizer.bypassSecurityTrustResourceUrl('../assets/aws-icons/dynamodb.svg'))
        .addSvgIcon('s3',
            sanitizer.bypassSecurityTrustResourceUrl('../assets/aws-icons/s3.svg'))
        .addSvgIcon('cloudformation',
            sanitizer.bypassSecurityTrustResourceUrl('../assets/aws-icons/cloudformation.svg'))
        .addSvgIcon('lambda',
            sanitizer.bypassSecurityTrustResourceUrl('../assets/aws-icons/lambda.svg'))
        .addSvgIcon('apigateway',
            sanitizer.bypassSecurityTrustResourceUrl('../assets/aws-icons/apigateway.svg'))
  }

}
