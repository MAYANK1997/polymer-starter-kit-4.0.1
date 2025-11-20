
import { useEffect } from "react";
import { config } from '@/config';
import { Box, Heading, HStack, Badge } from '@chakra-ui/react';
import { Grid, GridItem, Table } from '@chakra-ui/react';

const AlphaTheoryPage = () => {

  useEffect(() => {
    

   

    fetch(`${config.dashboards.researchPage.alphaTheory}/api/AlphaTheory/dumpAllData`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        cache: 'no-cache'
      },

      body: JSON.stringify({
         "email": "john.segrich@lombardodier.com",
         "password": "$$Sagebrush11"
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .finally(() => {
        console.log("Completes")
      });
  }, []);


 return (
  <>
  <Box minHeight="100vh">
    
  <Box   px={6} py={4}>
  <HStack justifyContent="space-between" alignItems="center">
    <HStack gap={4}>
      <Heading size="lg" >Alpha Theory Dashboard</Heading>
      
        <Badge colorScheme="blue" fontSize="md" px={3} py={1}>
         ABCD
        </Badge>
      
    </HStack>
    <HStack gap={6}  fontSize="sm">
      <Box>
        <Box as="span" >Price:</Box>{' '}
        <Box as="span"  fontWeight="semibold">1609.50</Box>
      </Box>
      <Box>
        <Box as="span" >SO:</Box>{' '}
        <Box as="span"  fontWeight="semibold">0.0M</Box>
      </Box>
      <Box>
        <Box as="span" >MC:</Box>{' '}
        <Box as="span"  fontWeight="semibold">$63.6B</Box>
      </Box>
      <Box>
        <Box as="span" >ND:</Box>{' '}
        <Box as="span"  fontWeight="semibold">349.9B</Box>
      </Box>
      <Box>
        <Box as="span">EV:</Box>{' '}
        <Box as="span"  fontWeight="semibold">0M</Box>
      </Box>
    </HStack>
  </HStack>
</Box>


<Grid templateColumns="1fr 500px" gap={4} p={4} height="calc(100vh - 80px)">
        <GridItem>
          <Box borderRadius="lg" border="1px solid" p={4} height="100%">
          


    <Box overflowX="auto" overflowY="auto" maxHeight="calc(100vh - 180px)">
      <Table.Root size="sm" variant="outline">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader  fontSize="xs" px={2} py={2}>Id</Table.ColumnHeader>
            <Table.ColumnHeader  fontSize="xs" px={2} py={2}>Ticker</Table.ColumnHeader>
            <Table.ColumnHeader  fontSize="xs" px={2} py={2} textAlign="right">Analyst Id</Table.ColumnHeader>
            <Table.ColumnHeader  fontSize="xs" px={2} py={2} textAlign="right">Volatility_Units</Table.ColumnHeader>
            <Table.ColumnHeader  fontSize="xs" px={2} py={2} textAlign="right">Lombard_Sharpe</Table.ColumnHeader>
            
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <h1>Ticker Table</h1>
        </Table.Body>
      </Table.Root>
    </Box>


          
  </Box>

        </GridItem>

        <GridItem>
          <Box display="flex" flexDirection="column" gap={4} height="40%">
            <Box  borderRadius="lg" border="1px solid"  p={4} flex="1">
             

            <Box>
      <Heading size="sm" color="white" mb={3} px={2}>Scenarios</Heading>
      <Table.Root size="sm" variant="outline">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader  fontSize="xs" px={2} py={2}>Scenario</Table.ColumnHeader>
            <Table.ColumnHeader  fontSize="xs" px={2} py={2} textAlign="right">Name</Table.ColumnHeader>
            <Table.ColumnHeader  fontSize="xs" px={2} py={2} textAlign="right">Estimate</Table.ColumnHeader>
            <Table.ColumnHeader  fontSize="xs" px={2} py={2} textAlign="right">Multiple</Table.ColumnHeader>
            <Table.ColumnHeader  fontSize="xs" px={2} py={2} textAlign="right">Prob</Table.ColumnHeader>
            <Table.ColumnHeader  fontSize="xs" px={2} py={2} textAlign="right">Summary</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        <h1>Scenario Table</h1>
        </Table.Body>
      </Table.Root>
    </Box>



        </Box>

           
          </Box>
        </GridItem>
      </Grid>



      </Box>
</>
)};

export default AlphaTheoryPage;



[
  {
    "bloombergTickerShort": "ALSN US",
    "bloomberg_id": "ALSN US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "AMBA US",
    "bloomberg_id": "AMBA US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "AMPX US",
    "bloomberg_id": "AMPX US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "CCK US",
    "bloomberg_id": "CCK US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "CNH US",
    "bloomberg_id": "CNH US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "CRS US",
    "bloomberg_id": "CRS US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "FLR US",
    "bloomberg_id": "FLR US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "GLD US",
    "bloomberg_id": "GLD US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "HASI US",
    "bloomberg_id": "HASI US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "KEX US",
    "bloomberg_id": "KEX US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "MP US",
    "bloomberg_id": "MP US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "ODFL US",
    "bloomberg_id": "ODFL US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "SLX AU",
    "bloomberg_id": "SLX AU EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "3750 HK",
    "bloomberg_id": "3750 HK EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "SIVR US",
    "bloomberg_id": "SIVR US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "SQM US",
    "bloomberg_id": "SQM US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "THM US",
    "bloomberg_id": "THM US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "WCC US",
    "bloomberg_id": "WCC US EQUITY",
    "analystID": 6176,
    "scenarios": {}
  },
  {
    "bloombergTickerShort": "NUE US",
    "bloomberg_id": "NUE US EQUITY",
    "analystID": 6166,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 100,
        "summary": "Base Case 120.00 at 100%"
      }
    },
    "volatility_units": 0,
    "lombard_sharpe": -11.511957055834062
  },
  {
    "bloombergTickerShort": "MU US",
    "bloomberg_id": "MU US EQUITY",
    "analystID": 6166,
    "scenarios": {
      "extreme": {
        "name": "Short Extreme Case",
        "estimate": null,
        "multiple": null,
        "prob": 10,
        "summary": "Short Extreme Case 243.00 at 10%"
      },
      "loss": {
        "name": "Short Loss Case",
        "estimate": null,
        "multiple": null,
        "prob": 30,
        "summary": "Short Loss Case 176.00 at 30%"
      },
      "base": {
        "name": "Base Case",
        "estimate": null,
        "multiple": null,
        "prob": 60,
        "summary": "Base Case 124.12 at 60%"
      }
    },
    "volatility_units": 0,
    "lombard_sharpe": -10.430962360226836
  },
  {
    "bloombergTickerShort": "SNDK US",
    "bloomberg_id": "SNDK US EQUITY",
    "analystID": 6166,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 10000,
        "multiple": 3,
        "prob": 100,
        "summary": "Base Case 201.46 at 100%"
      }
    },
    "volatility_units": 0,
    "lombard_sharpe": -4.212677699147092
  },
  {
    "bloombergTickerShort": "BW US",
    "bloomberg_id": "BW US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 80,
        "multiple": 12.5,
        "prob": 70,
        "summary": "Base Case 5.53 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 3.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 1.00 at 10%"
      }
    },
    "volatility_units": 0,
    "lombard_sharpe": -4.32795459349773
  },
  {
    "bloombergTickerShort": "ALB US",
    "bloomberg_id": "ALB US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 1200,
        "multiple": 20,
        "prob": 70,
        "summary": "Base Case 165.85 at 70%"
      },
      "loss": {
        "name": "Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Loss Case 83.00 at 20%"
      },
      "extreme": {
        "name": "Extreme Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Extreme Loss Case 54.00 at 10%"
      }
    },
    "volatility_units": 0,
    "lombard_sharpe": 2.4837147824047463
  },
  {
    "bloombergTickerShort": "RUN US",
    "bloomberg_id": "RUN US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 70,
        "summary": "Base Case 30.00 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 16.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 8.00 at 10%"
      }
    },
    "volatility_units": 1.1176348783416112,
    "lombard_sharpe": 6.928137717579721
  },
  {
    "bloombergTickerShort": "HPS/A CN",
    "bloomberg_id": "HPS/A CN EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 175,
        "multiple": 12.5,
        "prob": 100,
        "summary": "Base Case 180.69 at 100%"
      }
    },
    "volatility_units": 0,
    "lombard_sharpe": 3.52887746910729
  },
  {
    "bloombergTickerShort": "BE US",
    "bloomberg_id": "BE US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 2.5,
        "multiple": 70,
        "prob": 70,
        "summary": "Base Case 175.00 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 116.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 53.00 at 10%"
      }
    },
    "volatility_units": 1.1723063698421328,
    "lombard_sharpe": 8.062088243374017
  },
  {
    "bloombergTickerShort": "FSLR US",
    "bloomberg_id": "FSLR US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 3500,
        "multiple": 10,
        "prob": 70,
        "summary": "Base Case 331.42 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 200.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 133.00 at 10%"
      }
    },
    "volatility_units": 1.016483927615244,
    "lombard_sharpe": 5.233818174680766
  },
  {
    "bloombergTickerShort": "8996 TT",
    "bloomberg_id": "8996 TT EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 2500,
        "multiple": 25,
        "prob": 100,
        "summary": "Base Case 681.47 at 100%"
      }
    },
    "volatility_units": 1.2020318681544073,
    "lombard_sharpe": 8.75468680313108
  },
  {
    "bloombergTickerShort": "UEC US",
    "bloomberg_id": "UEC US EQUITY",
    "analystID": 6166,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 70,
        "summary": "Base Case 20.00 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 12.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 7.00 at 10%"
      }
    },
    "volatility_units": 1.2616108574179186,
    "lombard_sharpe": 10.327159043605398
  },
  {
    "bloombergTickerShort": "WM US",
    "bloomberg_id": "WM US EQUITY",
    "analystID": 6176,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": null,
        "multiple": null,
        "prob": 60,
        "summary": "Base Case 229.70 at 60%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": null,
        "multiple": null,
        "prob": 30,
        "summary": "Long Loss Case 218.00 at 30%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": null,
        "multiple": null,
        "prob": 10,
        "summary": "Long Extreme Case 179.00 at 10%"
      }
    },
    "volatility_units": 0,
    "lombard_sharpe": 2.5167180966390963
  },
  {
    "bloombergTickerShort": "EAF US",
    "bloomberg_id": "EAF US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": null,
        "multiple": null,
        "prob": 70,
        "summary": "Base Case 30.00 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": null,
        "multiple": null,
        "prob": 20,
        "summary": "Long Loss Case 16.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": null,
        "multiple": null,
        "prob": 10,
        "summary": "Long Extreme Case 7.00 at 10%"
      }
    },
    "volatility_units": 1.4154248736996071,
    "lombard_sharpe": 15.81945057859958
  },
  {
    "bloombergTickerShort": "FCX US",
    "bloomberg_id": "FCX US EQUITY",
    "analystID": 6166,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 35,
        "multiple": 1.5,
        "prob": 70,
        "summary": "Base Case 52.50 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 34.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 25.00 at 10%"
      }
    },
    "volatility_units": 1.044403878496683,
    "lombard_sharpe": 5.6550650080460825
  },
  {
    "bloombergTickerShort": "ENR GY",
    "bloomberg_id": "ENR GY EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 6000,
        "multiple": 17.5,
        "prob": 100,
        "summary": "Base Case 138.21 at 100%"
      }
    },
    "volatility_units": 1.1475029683867741,
    "lombard_sharpe": 7.526295679084622
  },
  {
    "bloombergTickerShort": "HWM US",
    "bloomberg_id": "HWM US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 6,
        "multiple": 40,
        "prob": 70,
        "summary": "Base Case 240.00 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 180.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 133.00 at 10%"
      }
    },
    "volatility_units": 0,
    "lombard_sharpe": 4.986233521754517
  },
  {
    "bloombergTickerShort": "RWE GY",
    "bloomberg_id": "RWE GY EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 5600,
        "multiple": 9,
        "prob": 100,
        "summary": "Base Case 48.29 at 100%"
      }
    },
    "volatility_units": 1.0512300280824938,
    "lombard_sharpe": 5.76311259906148
  },
  {
    "bloombergTickerShort": "CENX US",
    "bloomberg_id": "CENX US EQUITY",
    "analystID": 6166,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 6,
        "multiple": 7.5,
        "prob": 70,
        "summary": "Base Case 45.00 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 26.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 16.00 at 10%"
      }
    },
    "volatility_units": 1.3445940293864624,
    "lombard_sharpe": 12.99877902714931
  },
  {
    "bloombergTickerShort": "POWL US",
    "bloomberg_id": "POWL US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 275,
        "multiple": 20,
        "prob": 70,
        "summary": "Base Case 494.73 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 273.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 164.00 at 10%"
      }
    },
    "volatility_units": 1.3890229212568057,
    "lombard_sharpe": 14.702807715540596
  },
  {
    "bloombergTickerShort": "DAR US",
    "bloomberg_id": "DAR US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 1500,
        "multiple": 8,
        "prob": 70,
        "summary": "Base Case 49.08 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 28.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 18.00 at 10%"
      }
    },
    "volatility_units": 1.2816591907062418,
    "lombard_sharpe": 10.917456348907189
  },
  {
    "bloombergTickerShort": "BKR US",
    "bloomberg_id": "BKR US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 3,
        "multiple": 20,
        "prob": 70,
        "summary": "Base Case 60.00 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 44.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 35.00 at 10%"
      }
    },
    "volatility_units": 1.1717671859581635,
    "lombard_sharpe": 8.05004494844436
  },
  {
    "bloombergTickerShort": "VST US",
    "bloomberg_id": "VST US EQUITY",
    "analystID": 6176,
    "scenarios": {
      "extreme": {
        "name": "Short Extreme Case",
        "estimate": null,
        "multiple": null,
        "prob": 10,
        "summary": "Short Extreme Case 437.00 at 10%"
      },
      "loss": {
        "name": "Short Loss Case",
        "estimate": null,
        "multiple": null,
        "prob": 30,
        "summary": "Short Loss Case 308.00 at 30%"
      },
      "base": {
        "name": "Base Case",
        "estimate": null,
        "multiple": null,
        "prob": 60,
        "summary": "Base Case 205.69 at 60%"
      }
    },
    "volatility_units": 1.4240109373351992,
    "lombard_sharpe": 16.20056074285848
  },
  {
    "bloombergTickerShort": "GLW US",
    "bloomberg_id": "GLW US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 6500,
        "multiple": 15,
        "prob": 70,
        "summary": "Base Case 110.78 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 74.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 55.00 at 10%"
      }
    },
    "volatility_units": 1.2836737686755149,
    "lombard_sharpe": 10.978607474901313
  },
  {
    "bloombergTickerShort": "CCJ US",
    "bloomberg_id": "CCJ US EQUITY",
    "analystID": 6166,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 40,
        "multiple": 3,
        "prob": 100,
        "summary": "Base Case 120.00 at 100%"
      }
    },
    "volatility_units": 1.4348780916448372,
    "lombard_sharpe": 16.696114119266927
  },
  {
    "bloombergTickerShort": "YCA LN",
    "bloomberg_id": "YCA LN EQUITY",
    "analystID": 6166,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 100,
        "summary": "Base Case 7.00 at 100%"
      }
    },
    "volatility_units": 1.4244408281765684,
    "lombard_sharpe": 16.21988187353255
  },
  {
    "bloombergTickerShort": "WPM US",
    "bloomberg_id": "WPM US EQUITY",
    "analystID": 6166,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 45,
        "multiple": 3,
        "prob": 100,
        "summary": "Base Case 135.00 at 100%"
      }
    },
    "volatility_units": 1.4294026455503988,
    "lombard_sharpe": 16.44456199565977
  },
  {
    "bloombergTickerShort": "PPTA US",
    "bloomberg_id": "PPTA US EQUITY",
    "analystID": 6166,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 650,
        "multiple": 5,
        "prob": 100,
        "summary": "Base Case 52.57 at 100%"
      }
    },
    "volatility_units": 1.5,
    "lombard_sharpe": 33.87603526245436
  },
  {
    "bloombergTickerShort": "7011 JP",
    "bloomberg_id": "7011 JP EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 800000,
        "multiple": 25,
        "prob": 100,
        "summary": "Base Case 5,791.67 at 100%"
      }
    },
    "volatility_units": 1.5,
    "lombard_sharpe": 20.134302076268227
  },
  {
    "bloombergTickerShort": "GSM US",
    "bloomberg_id": "GSM US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 225,
        "multiple": 8,
        "prob": 70,
        "summary": "Base Case 9.19 at 70%"
      },
      "loss": {
        "name": "Loss Case",
        "estimate": null,
        "multiple": null,
        "prob": 20,
        "summary": "Loss Case 4.00 at 20%"
      },
      "extreme": {
        "name": "Extreme Loss Case",
        "estimate": null,
        "multiple": null,
        "prob": 10,
        "summary": "Extreme Loss Case 3.00 at 10%"
      }
    },
    "volatility_units": 1.5,
    "lombard_sharpe": 29.467968004281435
  },
  {
    "bloombergTickerShort": "TA CN",
    "bloomberg_id": "TA CN EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 1300,
        "multiple": 11,
        "prob": 70,
        "summary": "Base Case 32.72 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 17.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 13.00 at 10%"
      }
    },
    "volatility_units": 1.5,
    "lombard_sharpe": 20.12080046115928
  },
  {
    "bloombergTickerShort": "ORA US",
    "bloomberg_id": "ORA US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 675,
        "multiple": 17.5,
        "prob": 70,
        "summary": "Base Case 149.74 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 89.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 63.00 at 10%"
      }
    },
    "volatility_units": 1.3937259844751306,
    "lombard_sharpe": 14.89578275992725
  },
  {
    "bloombergTickerShort": "WAF GY",
    "bloomberg_id": "WAF GY EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 500,
        "multiple": 6.5,
        "prob": 100,
        "summary": "Base Case 75.00 at 100%"
      }
    },
    "volatility_units": 1.3899554830431793,
    "lombard_sharpe": 14.740872635804907
  },
  {
    "bloombergTickerShort": "CPX CN",
    "bloomberg_id": "CPX CN EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 1900,
        "multiple": 10,
        "prob": 70,
        "summary": "Base Case 87.87 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 60.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 47.00 at 10%"
      }
    },
    "volatility_units": 1.4604937015359818,
    "lombard_sharpe": 17.925020963112104
  },
  {
    "bloombergTickerShort": "3436 JP",
    "bloomberg_id": "3436 JP EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 150000,
        "multiple": 7.5,
        "prob": 100,
        "summary": "Base Case 2,185.71 at 100%"
      }
    },
    "volatility_units": 1.466923574882603,
    "lombard_sharpe": 18.24744281165525
  },
  {
    "bloombergTickerShort": "CRC US",
    "bloomberg_id": "CRC US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 1300,
        "multiple": 6,
        "prob": 70,
        "summary": "Base Case 74.42 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 47.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 34.00 at 10%"
      }
    },
    "volatility_units": 1.3507287875109368,
    "lombard_sharpe": 13.221768409976606
  },
  {
    "bloombergTickerShort": "SIMO US",
    "bloomberg_id": "SIMO US EQUITY",
    "analystID": 6166,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 8,
        "multiple": 22,
        "prob": 70,
        "summary": "Base Case 176.00 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 85.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 55.00 at 10%"
      }
    },
    "volatility_units": 1.5,
    "lombard_sharpe": 31.282066382114095
  },
  {
    "bloombergTickerShort": "MEOH US",
    "bloomberg_id": "MEOH US EQUITY",
    "analystID": 6166,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 10.5,
        "multiple": 6,
        "prob": 70,
        "summary": "Base Case 63.00 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 35.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 23.00 at 10%"
      }
    },
    "volatility_units": 1.5,
    "lombard_sharpe": 27.772242571211294
  },
  {
    "bloombergTickerShort": "GTT FP",
    "bloomberg_id": "GTT FP EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 600,
        "multiple": 15,
        "prob": 70,
        "summary": "Base Case 252.36 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 144.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 100.00 at 10%"
      }
    },
    "volatility_units": 1.4694849646253578,
    "lombard_sharpe": 18.37749155277313
  },
  {
    "bloombergTickerShort": "AVIO IM",
    "bloomberg_id": "AVIO IM EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 80,
        "multiple": 20,
        "prob": 100,
        "summary": "Base Case 65.89 at 100%"
      }
    },
    "volatility_units": 1.5,
    "lombard_sharpe": 46.24223324356375
  },
  {
    "bloombergTickerShort": "CLMT US",
    "bloomberg_id": "CLMT US EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 600,
        "multiple": 10,
        "prob": 70,
        "summary": "Base Case 39.65 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 16.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 9.00 at 10%"
      }
    },
    "volatility_units": 1.5,
    "lombard_sharpe": 34.90665273153625
  },
  {
    "bloombergTickerShort": "NFI CN",
    "bloomberg_id": "NFI CN EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 450,
        "multiple": 8.5,
        "prob": 70,
        "summary": "Base Case 28.52 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 13.00 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 9.00 at 10%"
      }
    },
    "volatility_units": 1.5,
    "lombard_sharpe": 44.217860667580155
  },
  {
    "bloombergTickerShort": "JMAT LN",
    "bloomberg_id": "JMAT LN EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 70,
        "summary": "Base Case 34.52 at 70%"
      },
      "loss": {
        "name": "Long Loss Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 20,
        "summary": "Long Loss Case 18.51 at 20%"
      },
      "extreme": {
        "name": "Long Extreme Case",
        "estimate": 0,
        "multiple": 0,
        "prob": 10,
        "summary": "Long Extreme Case 14.56 at 10%"
      }
    },
    "volatility_units": 1.5,
    "lombard_sharpe": 44.35666048464766
  },
  {
    "bloombergTickerShort": "UMI BB",
    "bloomberg_id": "UMI BB EQUITY",
    "analystID": 6165,
    "scenarios": {
      "base": {
        "name": "Base Case",
        "estimate": 900,
        "multiple": 10,
        "prob": 100,
        "summary": "Base Case 31.02 at 100%"
      }
    },
    "volatility_units": 1.5,
    "lombard_sharpe": 28.075233908069468
  }
]
 
