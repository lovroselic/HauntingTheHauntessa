// -- main --
$(function () {
    // Test configuration
    const width = 3;
    const height = 4;
    const depth = 5;
    const gridStructure = new ArrayBasedDataStructure_3D(width, height, depth);
    const totalIndices = width * height * depth;

    console.log("\n");
    console.log("------------------------------------------------");
    console.log("------------------------------------------------");
    console.log("------------------------------------------------");
    console.log(`Testing 3D Grid Mapping for dimensions: ${width}x${height}x${depth}`);
    console.log(`Total Indices: ${totalIndices}`);
    console.log("------------------------------------------------");

    // Testing loop
    let allPassed = true;
    for (let index = 0; index < totalIndices; index++) {
        let grid = gridStructure.indexToGrid(index);
        let computedIndex = gridStructure.gridToIndex(grid);

        if (computedIndex !== index) {
            console.error(`❌ Test failed at index ${index}. Expected ${index}, but got ${computedIndex}`);
            allPassed = false;
        } else {
            console.log(`✅ Test passed for index ${index}: (${grid.x}, ${grid.y}, ${grid.z}) -> ${computedIndex}`);
        }
    }

    // Final result
    console.log("------------------------------------------------");
    if (allPassed) {
        console.log("🎉 All tests passed successfully!");
    } else {
        console.log("❌ Some tests failed.");
    }
});
