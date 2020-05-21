/**
 * WordPress dependencies
 */
import { navigateRegions } from '@wordpress/components';
import { useSimulatedMediaQuery } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './sync-customizer';
import Header from '../header';
import WidgetAreasBlockEditorProvider from '../widget-areas-block-editor-provider';
import WidgetAreasBlockEditorContent from '../widget-areas-block-editor-content';

function CustomizerEditWidgetsInitializer( { settings } ) {
	useSimulatedMediaQuery( 'resizable-editor-section', 360 );
	return (
		<WidgetAreasBlockEditorProvider
			blockEditorSettings={ { ...settings, hasFixedToolbar: true } }
		>
			<div className="edit-widgets-customizer">
				<Header isCustomizer />
				<WidgetAreasBlockEditorContent />
			</div>
		</WidgetAreasBlockEditorProvider>
	);
}

export default navigateRegions( CustomizerEditWidgetsInitializer );
