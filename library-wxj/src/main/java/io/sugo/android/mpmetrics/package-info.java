/**
 * This package contains the interface to Mixpanel that you can use from your
 * Android apps. You can use Mixpanel to send events, update people analytics properties,
 * display push notifications and other Mixpanel-driven content to your users.
 *
 * The primary interface to Mixpanel services is in {@link io.sugo.android.mpmetrics.SugoAPI}.
 * At it's simplest, you can send events with
 * <pre>
 * {@code
 *
 * SugoAPI mixpanel = SugoAPI.getInstance(context, MIXPANEL_TOKEN);
 * mixpanel.track("Library integrated", null);
 *
 * }
 * </pre>
 *
 * In addition to this reference documentation, you can also see our overview
 * and getting started documentation at
 * <a href="https://mixpanel.com/help/reference/android" target="_blank"
 *    >https://mixpanel.com/help/reference/android</a>
 *
 */
package io.sugo.android.mpmetrics;