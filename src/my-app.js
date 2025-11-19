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


import { Table, Box, Spinner, Heading } from '@chakra-ui/react';
import { TickerScenario } from '../lib/supabase';

interface ScenarioTableProps {
  scenarios: TickerScenario[];
  loading: boolean;
}

export function ScenarioTable({ scenarios, loading }: ScenarioTableProps) {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="200px">
        <Spinner size="lg" color="blue.500" />
      </Box>
    );
  }

  if (scenarios.length === 0) {
    return (
      <Box textAlign="center" py={8} color="gray.500">
        No scenarios available
      </Box>
    );
  }

  return (
    <Box>
      <Heading size="sm" color="white" mb={3} px={2}>Scenarios</Heading>
      <Table.Root size="sm" variant="outline">
        <Table.Header bg="gray.800">
          <Table.Row>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2}>Scenario</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">Price</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">Target</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">Delta</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2}>Period</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2}>Val Method</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">Estimate</Table.ColumnHeader>
            <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">Multiple</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {scenarios.map((scenario) => (
            <Table.Row key={scenario.id} bg="gray.900">
              <Table.Cell color="white" fontSize="xs" px={2} py={1} fontWeight={scenario.scenario_name === 'Base' ? 'bold' : 'normal'}>
                {scenario.scenario_name}
              </Table.Cell>
              <Table.Cell color="gray.300" fontSize="xs" px={2} py={1} textAlign="right">
                {scenario.price.toFixed(2)}
              </Table.Cell>
              <Table.Cell color="gray.300" fontSize="xs" px={2} py={1} textAlign="right">
                {scenario.target.toFixed(0)}
              </Table.Cell>
              <Table.Cell
                color={scenario.delta >= 0 ? 'green.400' : 'red.400'}
                fontSize="xs"
                px={2}
                py={1}
                textAlign="right"
              >
                {scenario.delta.toFixed(1)}%
              </Table.Cell>
              <Table.Cell color="gray.300" fontSize="xs" px={2} py={1}>
                {scenario.period || '-'}
              </Table.Cell>
              <Table.Cell color="gray.300" fontSize="xs" px={2} py={1}>
                {scenario.val_method || '-'}
              </Table.Cell>
              <Table.Cell color="gray.300" fontSize="xs" px={2} py={1} textAlign="right">
                {scenario.estimate.toFixed(0)}
              </Table.Cell>
              <Table.Cell color="gray.300" fontSize="xs" px={2} py={1} textAlign="right">
                {scenario.multiple.toFixed(1)}x
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}

