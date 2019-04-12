import { GraphQLModule } from '@app/graphql/graphql.module'
import { BlockModule } from '@app/modules/blocks/block.module'
import { SearchModule } from '@app/modules/search/search.module'
import { TxModule } from '@app/modules/txs/tx.module'
import { OrmModule } from '@app/orm/orm.module'
import { SharedModule } from '@app/shared/shared.module'
import { Module } from '@nestjs/common'
import { LoggerModule } from '@app/shared/logger.module'
import { AccountModule } from '@app/modules/accounts/account.module'

@Module({
  imports: [
    SharedModule,
    GraphQLModule,
    OrmModule,
    // SubscriptionsModule,
    BlockModule,
    AccountModule,
    // ContractModule,
    // ExchangeModule,
    // ProcessingMetadataModule,
    // TokenTransferModule,
    TxModule,
    // UncleModule,
    // StatisticModule,
    SearchModule,
    LoggerModule,
  ],
})
export class AppModule {}
