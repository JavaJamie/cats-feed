
import { Heading } from "@chakra-ui/layout";
import React, { memo } from "react";

/**
 * The @Header component renders the top header across all pages. Memoize it so that we don't unnecessarily re-render as it should remain fixed and static
 * throughout the life time of the application.
 * 
 * @author jlee
 */
export const Header = memo(() => <Heading w="full" textAlign="center" as="h2" size="lg" pb={8}>Cats feed</Heading>);
export default Header;