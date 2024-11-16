/*
  SPDX-License-Identifier: Apache-2.0
  Smart Contract for test case management
*/

import { Object, Property } from 'fabric-contract-api';

@Object()
export class Asset {

  @Property()
  public idtest_cases: string;

  @Property()
  public test_desc: string;

  @Property()
  public deadline: string;

  // @Property()
  // public dateUpdated: string;

  @Property()
  public projectId: string;

  // @Property()
  // public reason: string;

  @Property()
  public testCaseName: string;

  @Property()
  public dateCreated: string;

  @Property()
  public overallStatus: string;

  @Property()
  public username: string;

  // @Property()
  // public createdBy: string;

  // @Property()
  // public status: string;

  /* @Property()
   public testPlan_id: string;

   @Property()
   public testPlan_desc: string;

   @Property()
   public isActive: boolean;

   @Property()
   public isPublic: boolean;

   @Property()
   public testPlan_name: string;
   */


}

@Object()
export class TestPlanAsset {
  @Property()
  public testPlanID: string;

  @Property()
  public testPlanName: string;

  @Property()
  public description: string;

  @Property()
  public isActive: boolean;

  @Property()
  public isPublic: boolean;


  @Property()
  public dateCreated: string;

  @Property()
  public username: string;

}
