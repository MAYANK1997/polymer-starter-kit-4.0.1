import { Table, Spinner, Box } from '@chakra-ui/react';
import { Ticker } from '../lib/supabase';

interface TickerTableProps {
  tickers: Ticker[];
  selectedTicker: Ticker | null;
  onSelectTicker: (ticker: Ticker) => void;
  loading: boolean;
}

export function TickerTable({ tickers, selectedTicker, onSelectTicker, loading }: TickerTableProps) {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="400px">
        <Spinner size="xl" color="blue.500" />
      </Box>
    );
  }

  return (
    <Box overflowX="auto" overflowY="auto" maxHeight="calc(100vh - 180px)">
      <Table.Root size="sm" variant="outline">
        <Table.Header bg="gray.800">
          <Table.Row>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2}>L/S</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2}>Ticker</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">Shares</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">Price (Local)</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">Target</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2}>Period</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2}>Val Method</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">Estimate</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">Multiple</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tickers.map((ticker) => (
            <Table.Row
              key={ticker.id}
              bg={selectedTicker?.id === ticker.id ? 'blue.900' : 'gray.900'}
              _hover={{ bg: 'gray.800', cursor: 'pointer' }}
              onClick={() => onSelectTicker(ticker)}
            >
              <Table.Cell px={2} py={1}>
                <Box
                  width="16px"
                  height="16px"
                  borderRadius="sm"
                  bg="green.500"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="10px"
                  fontWeight="bold"
                  color="white"
                >
                  L
                </Box>
              </Table.Cell>
              <Table.Cell color="white" fontSize="xs" px={2} py={1}>{ticker.ticker}</Table.Cell>
              <Table.Cell color="gray.300" fontSize="xs" px={2} py={1} textAlign="right">-</Table.Cell>
              <Table.Cell color="white" fontSize="xs" px={2} py={1} textAlign="right">
                {ticker.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </Table.Cell>
              <Table.Cell color="gray.300" fontSize="xs" px={2} py={1} textAlign="right">
                {ticker.target || '0'}
              </Table.Cell>
              <Table.Cell color="gray.300" fontSize="xs" px={2} py={1}>{ticker.period || '-'}</Table.Cell>
              <Table.Cell color="gray.300" fontSize="xs" px={2} py={1}>{ticker.val_method || '-'}</Table.Cell>
              <Table.Cell color="gray.300" fontSize="xs" px={2} py={1} textAlign="right">
                {ticker.estimate.toFixed(2)}
              </Table.Cell>
              <Table.Cell color="gray.300" fontSize="xs" px={2} py={1} textAlign="right">
                {ticker.multiple.toFixed(1)}x
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
