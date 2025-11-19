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
