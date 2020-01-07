import { Injectable } from '@nestjs/common';
import { IncomeStatement } from '../../entities/accountancy/incomeStatement.entity';
import { AccountancyServiceInterface } from './accountancy.service.interface';
import { PaymentMethod } from '../../entities/accountancy/paymentMethod.entity';
import { Mutation } from '../../entities/accountancy/mutation.entity';

@Injectable()
export class AccountancyService implements AccountancyServiceInterface {
    public readAllIncomeStatements(till: Date, name?: string): Promise<IncomeStatement[]> {
        return IncomeStatement.find({
            join: { alias: 'incomeStatement', innerJoinAndSelect: { mutations: 'incomeStatement.mutations'}},
            where: qb => {
                qb.where('mutations.date <= :date', { date: till});
                if (name) {
                    qb.where(`incomeStatement.name LIKE '%${name}%'`);
                }
            },
            });
    }

    public readAllPaymentMethods(till: Date, name?: string): Promise<PaymentMethod[]> {
        return PaymentMethod.find({
            join: { alias: 'paymentMethod', innerJoinAndSelect: { mutations: 'paymentMethod.mutations'}},
            where: qb => {
                qb.where('mutations.date <= :date', { date: till});

                if (name) {
                    qb.where(`paymentMethod.name LIKE '%${name}%'`);
                }
            },
            });
    }

    public readAllNotImportedMutations(): Promise<Mutation[]> {
        return Mutation.find({ where: { imported: false }});
    }

    public readOneMutations(id: number): Promise<Mutation> {
        return Mutation.findOne({ where: { id }, relations: ['paymentMethod', 'incomeStatement']});
    }

    public readOnePaymentMethod(id: number): Promise<PaymentMethod> {
        return PaymentMethod.findOne( {where: { id }});
    }

    public readOneIncomeStatement(id: number): Promise<IncomeStatement> {
        return IncomeStatement.findOne( {where: { id }});
    }

    public saveMutation(mutation: Mutation): Promise<Mutation> {
        return mutation.save();
    }
}
