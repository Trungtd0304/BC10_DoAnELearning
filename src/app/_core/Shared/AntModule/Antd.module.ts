import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  imports: [
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzDividerModule,
    NzGridModule,
    NzLayoutModule,
    NzSpaceModule,
    NzAffixModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzStepsModule,
    NzFormModule,
    NzInputModule,

    NzDatePickerModule,
  ],
  exports: [
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzDividerModule,
    NzGridModule,
    NzLayoutModule,
    NzSpaceModule,
    NzAffixModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzStepsModule,
    NzFormModule,
    NzInputModule,

    NzDatePickerModule,
  ],
})
export class AntdModule {}
