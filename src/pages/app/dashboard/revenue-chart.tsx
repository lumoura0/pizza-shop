import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import colors from 'tailwindcss/colors'
import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Line,
    Tooltip
} from 'recharts'

const data = [
    { date: '10/12', revenue: 1200 },
    { date: '10/12', revenue: 600 },
    { date: '11/12', revenue: 444 },
    { date: '14/12', revenue: 2222 },
    { date: '18/12', revenue: 7777 },
    { date: '16/12', revenue: 222 },
]

export function RevenueChart() {
    return (
        <Card className='col-span-6'>
            <CardHeader className='flex-row items-center justify-between pb-8'>
                <div className='space-y-1'>
                    <CardTitle className='text-base font-medium'>Receita no periodo</CardTitle>
                    <CardDescription>Receita diária no período</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <LineChart data={data} style={{ fontSize: 12 }}>
                        <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />

                        <YAxis
                            stroke='#888'
                            axisLine={false}
                            tickLine={false}
                            width={80}
                            tickFormatter={
                                (value: number) => value.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })} />

                        <CartesianGrid vertical={false} className='stroke-muted' />
                        <Line
                            type="linear"
                            strokeWidth={2}
                            dataKey="revenue"
                            stroke={colors.violet['500']}
                        />

                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}