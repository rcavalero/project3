import React, { Component } from "react";

class Test extends Component {
    //   componentDidMount() {
    //     return (
    //         <div>
    //             <script type="text/javascript">
    //                 amzn_assoc_placement = "adunit0";
    //                 amzn_assoc_search_bar = "true";
    //                 amzn_assoc_tracking_id = "sarkwon89-20";
    //                 amzn_assoc_ad_mode = "manual";
    //                 amzn_assoc_ad_type = "smart";
    //                 amzn_assoc_marketplace = "amazon";
    //                 amzn_assoc_region = "US";
    //                 amzn_assoc_title = "My Amazon Picks";
    //                 amzn_assoc_linkid = "c43adb62d8f81013cbdde7481af6d3ee";
    //                 amzn_assoc_asins = "B076TB6GW2,B009GFW8G4,B074H6X64W,B01J3TGH1E";
    //             </script>
    //             <script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"> </script>
    //         </div>
    //     );
    //   }

    // amazonscript = () => {

    // }

    render() {
        return (
            <div>
                <script type="text/javascript"> 
                    amzn_assoc_placement = "adunit0";
                    amzn_assoc_search_bar = "true";
                    amzn_assoc_tracking_id = "sarkwon89-20";
                    amzn_assoc_ad_mode = "manual";
                    amzn_assoc_ad_type = "smart";
                    amzn_assoc_marketplace = "amazon";
                    amzn_assoc_region = "US";
                    amzn_assoc_title = "My Amazon Picks";
                    amzn_assoc_linkid = "c43adb62d8f81013cbdde7481af6d3ee";
                    amzn_assoc_asins = "B076TB6GW2,B009GFW8G4,B074H6X64W,B01J3TGH1E";
                </script>
                <script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"> </script>
            </div>
        );
    }
}

export default Test