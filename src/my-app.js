import { useState, useEffect, useMemo } from 'react';
import { Box, Grid, GridItem, Heading, HStack, Badge, Table, Spinner } from '@chakra-ui/react';

interface TickerData {
  bloombergTickerShort: string;
  bloomberg_id: string;
  analystID: number;
  scenarios: {
    [key: string]: {
      name: string;
      estimate: number;
      multiple: number;
      prob: number;
      summary: string;
    };
  };
  volatility_units: number;
  lombard_sharpe: number;
}

const AlphaTheoryPage = () => {
  const [tickers, setTickers] = useState<TickerData[]>([]);
  const [selectedTicker, setSelectedTicker] = useState<TickerData | null>(null);
  const [loading, setLoading] = useState(true);

  const sampleData: TickerData[] = [
    {
      bloombergTickerShort: 'BW US',
      bloomberg_id: 'BW US EQUITY',
      analystID: 6165,
      scenarios: {
        base: {
          name: 'Base Case',
          estimate: 80,
          multiple: 12.5,
          prob: 70,
          summary: 'Base Case 5.53 at 70%',
        },
        loss: {
          name: 'Long Loss Case',
          estimate: 0,
          multiple: 0,
          prob: 20,
          summary: 'Long Loss Case 3.00 at 20%',
        },
        extreme: {
          name: 'Long Extreme Case',
          estimate: 0,
          multiple: 0,
          prob: 10,
          summary: 'Long Extreme Case 1.00 at 10%',
        },
      },
      volatility_units: 0,
      lombard_sharpe: -4.32795459349773,
    },
    {
      bloombergTickerShort: 'NUE US',
      bloomberg_id: 'NUE US EQUITY',
      analystID: 6166,
      scenarios: {
        base: {
          name: 'Base Case',
          estimate: 120,
          multiple: 18,
          prob: 100,
          summary: 'Base Case 120.00 at 100%',
        },
      },
      volatility_units: 0,
      lombard_sharpe: -11.511957055834062,
    },
    {
      bloombergTickerShort: 'AMD US',
      bloomberg_id: 'AMD US EQUITY',
      analystID: 6167,
      scenarios: {
        base: {
          name: 'Base Case',
          estimate: 150,
          multiple: 25,
          prob: 100,
          summary: 'Base Case 150.00 at 100%',
        },
        bull: {
          name: 'Bull Case',
          estimate: 180,
          multiple: 30,
          prob: 30,
          summary: 'Bull Case 180.00 at 30%',
        },
        bear: {
          name: 'Bear Case',
          estimate: 120,
          multiple: 20,
          prob: 20,
          summary: 'Bear Case 120.00 at 20%',
        },
      },
      volatility_units: 2.5,
      lombard_sharpe: 0.85,
    },
    {
      bloombergTickerShort: 'NVDA US',
      bloomberg_id: 'NVDA US EQUITY',
      analystID: 6168,
      scenarios: {
        base: {
          name: 'Base Case',
          estimate: 200,
          multiple: 35,
          prob: 100,
          summary: 'Base Case 200.00 at 100%',
        },
      },
      volatility_units: 3.2,
      lombard_sharpe: 1.25,
    },
  ];

  useEffect(() => {
    setLoading(true);
    try {
      setTickers(sampleData);
      if (sampleData.length > 0) {
        setSelectedTicker(sampleData[0]);
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const scenarioRows = useMemo(() => {
    if (!selectedTicker) return [];
    return Object.entries(selectedTicker.scenarios).map(([key, scenario]) => ({
      key,
      ...scenario,
    }));
  }, [selectedTicker]);

  return (
    <Box minHeight="100vh" bg="gray.950">
      <Box bg="gray.900" borderBottom="1px solid" borderColor="gray.700" px={6} py={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack gap={4}>
            <Heading size="lg" color="white">
              Alpha Theory Dashboard
            </Heading>
            {selectedTicker && (
              <Badge colorScheme="blue" fontSize="md" px={3} py={1}>
                {selectedTicker.bloombergTickerShort}
              </Badge>
            )}
          </HStack>
          <HStack gap={6} color="gray.300" fontSize="sm">
            <Box>
              <Box as="span" color="gray.500">
                Volatility Units:
              </Box>{' '}
              <Box as="span" color="white" fontWeight="semibold">
                {selectedTicker?.volatility_units.toFixed(2) || '-'}
              </Box>
            </Box>
            <Box>
              <Box as="span" color="gray.500">
                Lombard Sharpe:
              </Box>{' '}
              <Box as="span" color="white" fontWeight="semibold">
                {selectedTicker?.lombard_sharpe.toFixed(2) || '-'}
              </Box>
            </Box>
            <Box>
              <Box as="span" color="gray.500">
                Analyst ID:
              </Box>{' '}
              <Box as="span" color="white" fontWeight="semibold">
                {selectedTicker?.analystID || '-'}
              </Box>
            </Box>
          </HStack>
        </HStack>
      </Box>

      <Grid templateColumns="1fr 550px" gap={4} p={4} height="calc(100vh - 100px)">
        <GridItem>
          <Box
            bg="gray.900"
            borderRadius="lg"
            border="1px solid"
            borderColor="gray.800"
            p={4}
            height="100%"
            display="flex"
            flexDirection="column"
          >
            <Heading size="sm" color="white" mb={4}>
              Tickers
            </Heading>
            {loading ? (
              <Box display="flex" justifyContent="center" alignItems="center" flex={1}>
                <Spinner size="lg" color="blue.500" />
              </Box>
            ) : (
              <Box overflowX="auto" overflowY="auto" flex={1}>
                <Table.Root size="sm" variant="outline">
                  <Table.Header bg="gray.800" sticky="top" zIndex={1}>
                    <Table.Row>
                      <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2}>
                        Ticker
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2}>
                        Bloomberg ID
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">
                        Analyst ID
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">
                        Volatility
                      </Table.ColumnHeader>
                      <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">
                        Sharpe Ratio
                      </Table.ColumnHeader>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {tickers.map((ticker) => (
                      <Table.Row
                        key={ticker.bloomberg_id}
                        bg={selectedTicker?.bloomberg_id === ticker.bloomberg_id ? 'blue.900' : 'gray.900'}
                        _hover={{ bg: 'gray.800', cursor: 'pointer' }}
                        onClick={() => setSelectedTicker(ticker)}
                      >
                        <Table.Cell color="white" fontSize="xs" px={2} py={2}>
                          {ticker.bloombergTickerShort}
                        </Table.Cell>
                        <Table.Cell color="gray.300" fontSize="xs" px={2} py={2}>
                          {ticker.bloomberg_id}
                        </Table.Cell>
                        <Table.Cell color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">
                          {ticker.analystID}
                        </Table.Cell>
                        <Table.Cell color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">
                          {ticker.volatility_units.toFixed(2)}
                        </Table.Cell>
                        <Table.Cell
                          color={ticker.lombard_sharpe >= 0 ? 'green.400' : 'red.400'}
                          fontSize="xs"
                          px={2}
                          py={2}
                          textAlign="right"
                        >
                          {ticker.lombard_sharpe.toFixed(2)}
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </Box>
            )}
          </Box>
        </GridItem>

        <GridItem>
          <Box display="flex" flexDirection="column" gap={4} height="100%">
            <Box
              bg="gray.900"
              borderRadius="lg"
              border="1px solid"
              borderColor="gray.800"
              p={4}
              flex={1}
              display="flex"
              flexDirection="column"
              overflowY="auto"
            >
              <Heading size="sm" color="white" mb={3}>
                Scenarios
              </Heading>
              {!selectedTicker ? (
                <Box color="gray.500" fontSize="sm">
                  Select a ticker to view scenarios
                </Box>
              ) : scenarioRows.length === 0 ? (
                <Box color="gray.500" fontSize="sm">
                  No scenarios available
                </Box>
              ) : (
                <Box overflowX="auto" flex={1}>
                  <Table.Root size="xs" variant="outline">
                    <Table.Header bg="gray.800" sticky="top" zIndex={1}>
                      <Table.Row>
                        <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2}>
                          Scenario
                        </Table.ColumnHeader>
                        <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">
                          Estimate
                        </Table.ColumnHeader>
                        <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">
                          Multiple
                        </Table.ColumnHeader>
                        <Table.ColumnHeader color="gray.300" fontSize="xs" px={2} py={2} textAlign="right">
                          Prob %
                        </Table.ColumnHeader>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {scenarioRows.map((scenario) => (
                        <Table.Row key={scenario.key} bg="gray.900">
                          <Table.Cell color="white" fontSize="xs" px={2} py={1}>
                            {scenario.name}
                          </Table.Cell>
                          <Table.Cell color="gray.300" fontSize="xs" px={2} py={1} textAlign="right">
                            {scenario.estimate.toFixed(0)}
                          </Table.Cell>
                          <Table.Cell color="gray.300" fontSize="xs" px={2} py={1} textAlign="right">
                            {scenario.multiple.toFixed(1)}x
                          </Table.Cell>
                          <Table.Cell color="gray.300" fontSize="xs" px={2} py={1} textAlign="right">
                            {scenario.prob}%
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table.Root>
                </Box>
              )}
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default AlphaTheoryPage;
