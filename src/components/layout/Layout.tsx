import { Box } from "@chakra-ui/layout";
import React from "react";
import Header from "./Header";

interface LayoutProps {
  children?: React.ReactNode;
}

/**
 * 
 * @param children 
 * @returns 
 * @author jlee
 */
export const Layout = ({ children }: LayoutProps) => (
    <Box p={4} display="flex" flexDirection="column" position="relative">
        <Header />
        <Box as="main" p={6} flex={1} justifyContent="center" display="flex"> {/* As main, to specify main content area. Great for SEO and search engine crawling. Use HTML5 elements (as per sec) where necessary */}
            {children}
        </Box>
    </Box>
);