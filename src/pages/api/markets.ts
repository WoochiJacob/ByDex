import type { NextApiRequest, NextApiResponse } from 'next';

interface IMarkets {
    id: number;
    code: string;
    baseCoinId: number;
    baseCoinCode: string;
    coinId: number;
    dealCoinCode: string;
    callUnit: number;
    minTrade: number;
    minTradePrice: number;
    openTime: string;
    enable: string;
    sort: number;
    mkMinRate: number;
    mkMaxRate: number;
    mkRateYn: string;
    onViewEnable: string;
    onTradeEnable: string;
    onRebaseBeginTime: string;
    onRebaseEndTime: string;
    topYn: string;
    label?: string;
    mkBn?: string;
}

interface Data {
    result: IMarkets[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'POST') {
        res.status(200).json({
            result: [
                {
                    id: 9856,
                    code: 'USDT-FOL',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 5029,
                    dealCoinCode: 'FOL',
                    callUnit: 0.001,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-07-18T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    topYn: 'N',
                },
                {
                    id: 10257,
                    code: 'USDT-RRT',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 11033,
                    dealCoinCode: 'RRT',
                    callUnit: 0.0001,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-12-19T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 200,
                    mkRateYn: 'Y',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    label: 'H',
                    topYn: 'N',
                },
                {
                    id: 9861,
                    code: 'USDT-SDT',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 1217,
                    dealCoinCode: 'SDT',
                    callUnit: 0.00001,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-08-08T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    topYn: 'N',
                },
                {
                    id: 9865,
                    code: 'USDT-VRA',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 8434,
                    dealCoinCode: 'VRA',
                    callUnit: 0.00001,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-08-08T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    topYn: 'N',
                },
                {
                    id: 10056,
                    code: 'USDT-BTR',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 10433,
                    dealCoinCode: 'BTR',
                    callUnit: 0.0001,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-11-14T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    topYn: 'N',
                },
                {
                    id: 9860,
                    code: 'USDT-VIX',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 6430,
                    dealCoinCode: 'VIX',
                    callUnit: 0.00001,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-08-08T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    onViewEnable: 'Y',
                    onTradeEnable: 'N',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    topYn: 'N',
                },
                {
                    id: 9866,
                    code: 'USDT-NFTS',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 8833,
                    dealCoinCode: 'NFTS',
                    callUnit: 0.00001,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-08-08T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    topYn: 'N',
                },
                {
                    id: 9857,
                    code: 'USDT-QM',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 5232,
                    dealCoinCode: 'QM',
                    callUnit: 0.00001,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-07-18T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    topYn: 'N',
                },
                {
                    id: 9654,
                    code: 'USDT-DPR',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 7638,
                    dealCoinCode: 'DPR',
                    callUnit: 0.0001,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-07-18T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    topYn: 'N',
                },
                {
                    id: 9869,
                    code: 'USDT-AUSCM',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 7430,
                    dealCoinCode: 'AUSCM',
                    callUnit: 0.0001,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-08-08T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1130',
                    topYn: 'N',
                },
                {
                    id: 9868,
                    code: 'USDT-KEYT',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 1613,
                    dealCoinCode: 'KEYT',
                    callUnit: 0.00001,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-08-08T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    topYn: 'N',
                },
                {
                    id: 1031,
                    code: 'USDT-BTC',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 2,
                    dealCoinCode: 'BTC',
                    callUnit: 0.01,
                    minTrade: 0.00001,
                    minTradePrice: 1,
                    openTime: '2021-08-01T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    mkBn: '0',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1130',
                    label: 'H',
                    topYn: 'N',
                },
                {
                    id: 9858,
                    code: 'USDT-CT',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 2229,
                    dealCoinCode: 'CT',
                    callUnit: 0.00001,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-08-08T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    topYn: 'N',
                },
                {
                    id: 9859,
                    code: 'USDT-MIR',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 9435,
                    dealCoinCode: 'MIR',
                    callUnit: 0.00001,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-08-08T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    topYn: 'N',
                },
                {
                    id: 9867,
                    code: 'USDT-HORD',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 8235,
                    dealCoinCode: 'HORD',
                    callUnit: 0.0001,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-08-08T15:00:00.000Z',
                    enable: 'Y',
                    sort: 1,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'N',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    label: '!',
                    topYn: 'N',
                },
                {
                    id: 1032,
                    code: 'USDT-ETH',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 5,
                    dealCoinCode: 'ETH',
                    callUnit: 0.01,
                    minTrade: 0.0001,
                    minTradePrice: 1,
                    openTime: '2021-08-01T15:00:00.000Z',
                    enable: 'Y',
                    sort: 2,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    mkBn: '0',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1130',
                    label: 'H',
                    topYn: 'N',
                },
                {
                    id: 3850,
                    code: 'USDT-FIL',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 2830,
                    dealCoinCode: 'FIL',
                    callUnit: 0.01,
                    minTrade: 0.01,
                    minTradePrice: 1,
                    openTime: '2021-08-01T15:00:00.000Z',
                    enable: 'Y',
                    sort: 3,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    mkBn: '0',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    topYn: 'N',
                },
                {
                    id: 1033,
                    code: 'USDT-XRP',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 7,
                    dealCoinCode: 'XRP',
                    callUnit: 0.0001,
                    minTrade: 0.1,
                    minTradePrice: 10,
                    openTime: '2019-03-17T15:00:00.000Z',
                    enable: 'Y',
                    sort: 4,
                    mkMinRate: 50,
                    mkMaxRate: 300,
                    mkRateYn: 'Y',
                    onViewEnable: 'Y',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1130',
                    topYn: 'N',
                },
                {
                    id: 1,
                    code: 'KRW-BTC',
                    baseCoinId: 1,
                    baseCoinCode: 'KRW',
                    coinId: 2,
                    dealCoinCode: 'BTC',
                    callUnit: 1000,
                    minTrade: 0.0001,
                    minTradePrice: 500,
                    openTime: '2019-03-17T15:00:00.000Z',
                    enable: 'Y',
                    sort: 5,
                    mkMinRate: 50,
                    mkMaxRate: 200,
                    mkRateYn: 'Y',
                    onViewEnable: 'N',
                    onTradeEnable: 'N',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1130',
                    topYn: 'N',
                },
                {
                    id: 1466,
                    code: 'KRW-USDT',
                    baseCoinId: 1,
                    baseCoinCode: 'KRW',
                    coinId: 1614,
                    dealCoinCode: 'USDT',
                    callUnit: 1,
                    minTrade: 0.01,
                    minTradePrice: 500,
                    openTime: '2020-06-17T15:00:00.000Z',
                    enable: 'Y',
                    sort: 9,
                    mkMinRate: 50,
                    mkMaxRate: 200,
                    mkRateYn: 'Y',
                    onViewEnable: 'N',
                    onTradeEnable: 'N',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1130',
                    label: 'H',
                    topYn: 'N',
                },
                {
                    id: 9870,
                    code: 'USDT-AMPL',
                    baseCoinId: 1614,
                    baseCoinCode: 'USDT',
                    coinId: 2629,
                    dealCoinCode: 'AMPL',
                    callUnit: 0.00001,
                    minTrade: 0.001,
                    minTradePrice: 1,
                    openTime: '2021-09-12T15:00:00.000Z',
                    enable: 'Y',
                    sort: 999,
                    mkMinRate: 50,
                    mkMaxRate: 200,
                    mkRateYn: 'Y',
                    onViewEnable: 'N',
                    onTradeEnable: 'Y',
                    onRebaseBeginTime: '1050',
                    onRebaseEndTime: '1140',
                    topYn: 'N',
                },
            ],
        });
    }
}
