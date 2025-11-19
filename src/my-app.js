import { Box, Heading, HStack, Badge } from '@chakra-ui/react';

interface HeaderProps {
  selectedTicker: string | null;
}

export function Header({ selectedTicker }: HeaderProps) {
  return (
    <Box bg="gray.900" borderBottom="1px solid" borderColor="gray.700" px={6} py={4}>
      <HStack justifyContent="space-between" alignItems="center">
        <HStack gap={4}>
          <Heading size="lg" color="white">Alpha Theory Dashboard</Heading>
          {selectedTicker && (
            <Badge colorScheme="blue" fontSize="md" px={3} py={1}>
              {selectedTicker}
            </Badge>
          )}
        </HStack>
        <HStack gap={6} color="gray.300" fontSize="sm">
          <Box>
            <Box as="span" color="gray.500">Price:</Box>{' '}
            <Box as="span" color="white" fontWeight="semibold">1609.50</Box>
          </Box>
          <Box>
            <Box as="span" color="gray.500">SO:</Box>{' '}
            <Box as="span" color="white" fontWeight="semibold">0.0M</Box>
          </Box>
          <Box>
            <Box as="span" color="gray.500">MC:</Box>{' '}
            <Box as="span" color="white" fontWeight="semibold">$63.6B</Box>
          </Box>
          <Box>
            <Box as="span" color="gray.500">ND:</Box>{' '}
            <Box as="span" color="white" fontWeight="semibold">349.9B</Box>
          </Box>
          <Box>
            <Box as="span" color="gray.500">EV:</Box>{' '}
            <Box as="span" color="white" fontWeight="semibold">0M</Box>
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
}



import { useState, useEffect } from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { supabase, Ticker, TickerScenario, TickerMetric } from './lib/supabase';
import { Header } from './components/Header';
import { TickerTable } from './components/TickerTable';
import { ScenarioTable } from './components/ScenarioTable';
import { MetricsTable } from './components/MetricsTable';

function App() {
  const [tickers, setTickers] = useState<Ticker[]>([]);
  const [selectedTicker, setSelectedTicker] = useState<Ticker | null>(null);
  const [scenarios, setScenarios] = useState<TickerScenario[]>([]);
  const [metrics, setMetrics] = useState<TickerMetric[]>([]);
  const [loadingTickers, setLoadingTickers] = useState(true);
  const [loadingScenarios, setLoadingScenarios] = useState(false);
  const [loadingMetrics, setLoadingMetrics] = useState(false);

  useEffect(() => {
    fetchTickers();
  }, []);

  useEffect(() => {
    if (selectedTicker) {
      fetchScenarios(selectedTicker.id);
      fetchMetrics(selectedTicker.id);
    }
  }, [selectedTicker]);

  async function fetchTickers() {
    try {
      const { data, error } = await supabase
        .from('tickers')
        .select('*')
        .order('sort_order', { ascending: true });

      if (error) throw error;
      setTickers(data || []);
      if (data && data.length > 0) {
        setSelectedTicker(data[0]);
      }
    } catch (error) {
      console.error('Error fetching tickers:', error);
    } finally {
      setLoadingTickers(false);
    }
  }

  async function fetchScenarios(tickerId: string) {
    setLoadingScenarios(true);
    try {
      const { data, error } = await supabase
        .from('ticker_scenarios')
        .select('*')
        .eq('ticker_id', tickerId);

      if (error) throw error;
      setScenarios(data || []);
    } catch (error) {
      console.error('Error fetching scenarios:', error);
    } finally {
      setLoadingScenarios(false);
    }
  }

  async function fetchMetrics(tickerId: string) {
    setLoadingMetrics(true);
    try {
      const { data, error } = await supabase
        .from('ticker_metrics')
        .select('*')
        .eq('ticker_id', tickerId)
        .order('fiscal_year', { ascending: true });

      if (error) throw error;
      setMetrics(data || []);
    } catch (error) {
      console.error('Error fetching metrics:', error);
    } finally {
      setLoadingMetrics(false);
    }
  }

  return (
    <Box minHeight="100vh" bg="gray.950">
      <Header selectedTicker={selectedTicker?.ticker || null} />

      <Grid templateColumns="1fr 400px" gap={4} p={4} height="calc(100vh - 80px)">
        <GridItem>
          <Box bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.800" p={4} height="100%">
            <TickerTable
              tickers={tickers}
              selectedTicker={selectedTicker}
              onSelectTicker={setSelectedTicker}
              loading={loadingTickers}
            />
          </Box>
        </GridItem>

        <GridItem>
          <Box display="flex" flexDirection="column" gap={4} height="100%">
            <Box bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.800" p={4} flex="1">
              <ScenarioTable scenarios={scenarios} loading={loadingScenarios} />
            </Box>

            <Box bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.800" p={4} flex="1">
              <MetricsTable metrics={metrics} loading={loadingMetrics} />
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;

